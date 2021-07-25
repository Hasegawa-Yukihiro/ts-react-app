import { JSONSchema7 } from "json-schema";
import { BaseRequest } from "~controller/types";
import { IUser } from "~apiDomain/User/types";

export type SignUpRequest = BaseRequest<{}, SignUpRequestBody, {}>;

export type SignUpRequestBody = {
  user: IUser;
};

export const SignUpRequestBodySchema: JSONSchema7 = {
  type: "object",
  required: ["user"],
  properties: {
    user: { type: "object" }
  },
  additionalProperties: false
};
