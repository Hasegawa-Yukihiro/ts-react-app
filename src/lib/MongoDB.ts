import { MongoClient, Db } from "mongodb";
import chalk from "chalk";

export class MongoDB {
  URI = "mongodb://127.0.0.1:9000";
  DB_NAME = "ts-react-app";
  db!: Db;

  constructor() {
    console.log(chalk.greenBright("-MongoDB- instance was created."));
  }

  async connectMongoDB(): Promise<Db> {
    try {
      const client = await MongoClient.connect(this.URI);
      const db = client.db(this.DB_NAME);
      return db;
    } catch (error) {
      console.log(chalk.redBright(error));
      throw new Error();
    }
  }
}
