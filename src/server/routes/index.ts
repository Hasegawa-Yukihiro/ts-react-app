import { Express } from "express";
import { signUp } from "~controller/User/SignUp";

export const routes = (app: Express): Express => {
  app.get("/sign-in", (req, res) => {
    console.log(`get`);
  });

  app.post("/user/sign-up", signUp);

  return app;
};
