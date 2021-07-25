import { BaseRequest } from "~utils/base/BaseRequest/types";
import { IUser } from "~domain/User/types";

export type SignUpRequest = BaseRequest<{}, RequestBody, {}>;
interface RequestBody {
  user: IUser;
}
