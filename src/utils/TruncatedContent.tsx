interface TruncatedContentProp {
    maxContentLength: number;
    content: string;
}

export const TruncatedContent = ({ maxContentLength, content }: TruncatedContentProp) => {
    const MAX_CONTENT_LENGTH = maxContentLength; // 매개변수로부터 받은 값 사용
    if (content.length > MAX_CONTENT_LENGTH) {
        return content.slice(0, MAX_CONTENT_LENGTH) + "  ...더보기";
    } else {
        return content;
    }
}
