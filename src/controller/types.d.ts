import { Request, Response } from "express";

interface BaseRequest<PathParameter, Body, QueryParameter>
  extends Request<PathParameter, {}, Body, QueryParameter> {
  query: QueryParameter;
}

interface BaseResponse<RequestBody>
  extends Response<RequestBody & { ok: boolean }> {}
