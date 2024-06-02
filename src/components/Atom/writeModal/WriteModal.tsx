import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { IMAGES } from "src/constants/images";
import { Coordinates, Tag } from "src/constants/interface";
import { useFetchReview } from "src/hook/useFetchReview";
import useFetchStreet from "src/hook/useFetchStreet";
import { swipeStateCloseAction } from "src/store/swipeState/swipeStateAction";
import { MappingImgItem } from "../mappingImgItem/MappingImgItem";
import { Text } from "../text/Text";
import "./WriteModal.css";

interface WriteModalProps {
  writeTypeProp: string;
  streetDatas?: Coordinates;
  onClose: () => void;
}

const WriteModal: FC<WriteModalProps> = ({
  writeTypeProp,
  streetDatas,
  onClose,
}) => {
  const writeType = writeTypeProp === "REVIEW" ? "리뷰" : "거리";
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(swipeStateCloseAction());
  };
  const { writeReview } = useFetchReview();
  const { writeStreet } = useFetchStreet();
  const [uploadTitle, setUpladTitle] = useState<string>("");
  const [uploadContent, setUpladContent] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [uploadTagList, setUpladTagList] = useState<Tag[]>([]);
  const [uploadImages, setUploadImages] = useState<{
    imageFiles: File[];
    imageUrls: string[];
  }>({ imageFiles: [], imageUrls: [] });
  const handleFetchData = async () => {
    if (writeTypeProp === "REVIEW") {
      if (streetDatas === undefined) {
        console.log("streetData = undifind");
        return;
      }
      try {
        await writeReview(
          { lat: streetDatas.lat, lng: streetDatas.lng },
          uploadContent,
          uploadImages.imageFiles
        );
        console.log("리뷰 작성 성공");
      } catch (error) {
        console.error("리뷰 작성 실패:", error);
      }
    } else if (writeTypeProp === "STREET") {
      try {
        await writeStreet(uploadTitle, uploadTagList, uploadImages.imageFiles);
        console.log("거리 작성 성공");
      } catch (error) {
        console.error("거리 작성 실패:", error);
      }
    }
    handleClose();
    onClose();
  };
  const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return; // a
    const files = e.target.files;
    const fileArray = Array.from(files); //b
    if (uploadImages.imageFiles.length + fileArray.length <= 3) {
      const newImages = Array.from(files, (file) => URL.createObjectURL(file));
      setUploadImages({
        imageFiles: [...uploadImages.imageFiles, ...fileArray],
        imageUrls: [...uploadImages.imageUrls, ...newImages],
      });
    } else {
      alert("이미지는 최대 3장까지 첨부할 수 있습니다.");
    }
  };
  const handleRemoveImage = (id: number) => {
    setUploadImages({
      imageFiles: uploadImages.imageFiles.filter((_, index) => index !== id),
      imageUrls: uploadImages.imageUrls.filter((_, index) => index !== id),
    });
  };
  return (
    <div className="write-modal-wrapper">
      <div className="write-modal-box">
        <div className="write-modal-top">
          <Text color="#000" fontSize="0.9375rem" fontWeight="700">
            {writeType} 작성
          </Text>
          <img src={IMAGES.Xicon} alt="x" onClick={onClose} />
        </div>
        <div className="write-modal-img-input-wrapper">
          <>
            <div className="write-modal-img-input-box">
              <div className="write-modal-maping-img">
                {uploadImages.imageUrls.map((url, index) => (
                  <MappingImgItem
                    key={index}
                    imgUrl={url}
                    index={index}
                    onClick={() => handleRemoveImage(index)}
                  />
                ))}
              </div>
              <div className="write-modal-img-input">
                <label htmlFor="file__input">
                  <img src={IMAGES.imgUpload} alt="imageUpload" />
                </label>
                <input
                  id="file__input"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageInputChange}
                  aria-label="file__input"
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </>
          <>
            {writeTypeProp === "STREET" && (
              <div className="write-modal-content">
                <Text color="#000" fontSize="0.75rem" fontWeight="700">
                  제목
                </Text>
                <input
                  type="text"
                  placeholder="이름을 알려주세요!"
                  value={uploadTitle} // 입력값 상태로 설정
                  onChange={(e) => setUpladTitle(e.target.value)}
                />
              </div>
            )}
            {writeTypeProp === "REVIEW" && (
              <div className="write-modal-content">
                <Text color="#000" fontSize="0.75rem" fontWeight="700">
                  내용
                </Text>
                <textarea
                  placeholder="문구를 작성하시거나 하고싶을 말을 쓰세요 !"
                  value={uploadContent} // 입력값 상태로 설정
                  onChange={(e) => setUpladContent(e.target.value)}
                />
              </div>
            )}
            {writeTypeProp === "STREET" && (
              <>
                <div className="write-modal-content">
                  <Text color="#000" fontSize="0.75rem" fontWeight="700">
                    태그
                  </Text>
                  <input
                    type="text"
                    placeholder="추가하고 싶은 태그들을 작성해보아요!"
                    value={tag} // 입력값 상태로 설정
                    onChange={(e) => setTag(e.target.value)}
                    onKeyPress={(e) => {
                      if (
                        e.key === "Enter" &&
                        tag.trim() &&
                        uploadTagList.length < 3
                      ) {
                        setUpladTagList([...uploadTagList, { value: tag }]);
                        setTag("");
                      }
                    }}
                  />
                </div>
                <div className="write-modal-tag-list">
                  {uploadTagList.map((tag, idx) => (
                    <React.Fragment key={idx}>
                      <Text color="#000">#{tag.value}</Text>
                    </React.Fragment>
                  ))}
                </div>
              </>
            )}
          </>
          <div className="write-modal-summit-button">
            <Text
              color="#2B2B2B"
              fontSize="0.9375rem"
              fontWeight="600"
              onClick={handleFetchData}
            >
              등록하기
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteModal;
