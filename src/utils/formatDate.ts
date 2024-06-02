export function formatDate(isoDate: string) {
  const date = new Date(isoDate);
  const year = date.getFullYear().toString().slice(2); // 년도에서 앞 2자리만 추출
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월을 2자리로 변환하고 앞에 0을 채움
  const day = String(date.getDate()).padStart(2, "0"); // 일을 2자리로 변환하고 앞에 0을 채움
  const hours = String(date.getHours()).padStart(2, "0"); // 시를 2자리로 변환하고 앞에 0을 채움
  const minutes = String(date.getMinutes()).padStart(2, "0"); // 분을 2자리로 변환하고 앞에 0을 채움

  return `${year}.${month}.${day}, ${hours}시 ${minutes}분`;
}
