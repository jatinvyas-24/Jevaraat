import { API_BASE_URL } from "../App";

export function getProductImageUrl(imgUrl) {
  if (!imgUrl) {
    return "";
  }

  if (imgUrl.startsWith("http")) {
    return imgUrl;
  }

  const normalizedPath = imgUrl.startsWith("/uploads/")
    ? imgUrl
    : `/uploads/${imgUrl.replace(/^\/+/, "")}`;

  return `${API_BASE_URL}${normalizedPath}`;
}
