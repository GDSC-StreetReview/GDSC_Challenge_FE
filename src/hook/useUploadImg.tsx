import commonApis from "src/utils/commonApis";

export enum uploadType {
  street = "STREET",
  review = "REVIEW",
}
const useUploadImg = () => {
  const postUploadImg = async (
    target: uploadType,
    reviewId: string,
    files: File[]
  ): Promise<void> => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("image", file);
    });
    try {
      const response = await commonApis.post(
        `/upload/${target}/${reviewId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return { postUploadImg };
};

export default useUploadImg;
