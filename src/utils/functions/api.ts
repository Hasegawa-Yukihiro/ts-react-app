import { AxiosRequestConfig } from "axios";

export function generateUrl(pathname: string) {
  const protocol = process.env["PROTOCOL"];
  const fqnd = process.env["API_FQND"];

  return `${protocol}://${fqnd}${pathname}`;
}

export function generateAxiosRequestConfig(params?: {
  query?: any;
  contentType?: "multipart/form-data";
}): AxiosRequestConfig {
  const token = localStorage.getItem("token") || "";

  return {
    params: params?.query,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": params?.contentType
    }
  };
}
