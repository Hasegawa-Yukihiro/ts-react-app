import { Express } from "express";

export const routes = (app: Express): Express => {
  app.get("/sign-in", (req, res) => {
    console.log(`get`);
  });

  app.post("/user/sign-up", (req, res) => {
    console.log(`get`);
  });

  return app;
};
