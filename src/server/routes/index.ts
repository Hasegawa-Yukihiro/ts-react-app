import express, { Express } from "express";

const app: Express = express();

const port = process.env.PORT || 8080;

export const routes = (app: Express): Express => {
  app.get("/aaa", (req, res) => {
    console.log(req.body);
    console.log(`get aaa`);
  });

  return app;
};
