import axios from "axios";
import { generateAxiosRequestConfig, generateUrl } from "~utils/functions/api";
import { SignUpRequest } from "./request";
import { SignUpResponse, SignUpResponseBody } from "./response";

export const signUpApi = async (
  req: SignUpRequest
): Promise<SignUpResponse> => {
  const url = generateUrl(`/user/sign-up`);
  const config = generateAxiosRequestConfig();

  const result = await axios.post<SignUpResponseBody>(url, req.body, config);

  return result;
};
