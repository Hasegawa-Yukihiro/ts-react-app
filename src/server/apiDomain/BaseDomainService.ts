import chalk from "chalk";
import * as uuid from "uuid";

export class BaseDomainService {
  constructor(params: { className: string }) {
    const message = `-${params.className}- instance was created`;
    console.log(chalk.yellowBright(message));
  }

  /** uuidの発行 */
  protected generateId() {
    const id = uuid.v4();
    return id;
  }
}
