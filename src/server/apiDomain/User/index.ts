import { IUser } from "./types";

export class User implements IUser {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  password: string;

  // private crypto: Crypto;

  constructor(User: IUser) {
    this.id = User.id;
    this.lastName = User.lastName;
    this.firstName = User.firstName;
    this.email = User.email;
    this.password = User.password;
  }

  toJson(): IUser {
    return {
      id: this.id,
      lastName: this.lastName,
      firstName: this.firstName,
      email: this.email,
      password: this.password
    };
  }

  /** パスワードを隠蔽する
   * パスワードの桁数は知りたいので、一度もとのパスワードに復元して、"*"でreplaceする
   */
  // maskPassword() {
  //   const encodedPassword = this.crypto.encode(this.password);

  //   const maskedPassword = encodedPassword.replace(/./g, "*");

  //   this.password = maskedPassword;
  // }
}
