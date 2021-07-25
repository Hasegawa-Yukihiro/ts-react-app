import { NextFunction } from "express";
import { domainServiceFactory } from "~factory/DomainServiceFactory";
import { SignUpRequest } from "./request";
import { SignUpResponse } from "./response";

const { userDomainService } = domainServiceFactory;

export const signUp = async (
  req: SignUpRequest,
  res: SignUpResponse,
  next: NextFunction
) => {
  try {
    const user = await userDomainService.signUp(req.body.user);

    return res.json({ ok: true, user });
  } catch (error) {
    next(error);
  }
};
