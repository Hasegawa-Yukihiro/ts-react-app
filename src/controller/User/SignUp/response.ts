import { BaseResponse } from "~controller/types";
import { IUser } from "~apiDomain/User/types";

export type SignUpResponse = BaseResponse<SignUpResponseBody>;

export interface SignUpResponseBody {
  user: IUser;
}
