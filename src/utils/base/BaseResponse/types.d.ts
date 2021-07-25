import { AxiosResponse } from "axios";

export interface BaseResponse<Body>
  extends AxiosResponse<Body & BaseResponseBody> {}
export interface BaseResponseBody {
  ok: boolean;
}
