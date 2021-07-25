import { BaseResponse, BaseResponseBody } from "~utils/base/BaseResponse/types";
import { IUser } from "~apiDomain/User/types";

export type SignUpResponse = BaseResponse<SignUpResponseBody>;
export interface SignUpResponseBody extends BaseResponseBody {
  user: IUser;
}
