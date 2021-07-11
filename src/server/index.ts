import express, { Response, Request, Express } from "express";

const app: Express = express();

const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
});
