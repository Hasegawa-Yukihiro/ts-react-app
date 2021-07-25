import chalk from "chalk";
import Mongo from "mongodb";
import { MongoDB } from "~lib/MongoDB";

export class BaseDomainRepository {
  protected mongoDB: Mongo.Db;
  protected collectionName: string;
  protected limit: number = 100;

  constructor(params: {
    className: string;
    collectionName: string;
    limit?: number;
  }) {
    const message = `-${params.className}- instance was created`;
    console.log(chalk.yellowBright(message));

    new MongoDB().connectMongoDB().then(db => (this.mongoDB = db));
    this.collectionName = params.collectionName;
    this.limit = params.limit ? params.limit : this.limit;
  }
}
