import { BaseDomainService } from "~apiDomain/BaseDomainService";
// import { ValidationError } from "~utils/modules/Error";
import { UserDomainRepository } from "./repository";
// import { Crypto } from "~utils/modules/Crypto";
// import { Request } from "express";
import { IUser } from "~apiDomain/User/types";
// import { userOrder } from "./types";

export class userDomainService extends BaseDomainService {
  private crypto: Crypto;
  private userDomainRepository: UserDomainRepository;

  constructor(params: { userDomainRepository: UserDomainRepository }) {
    super({ className: "userDomainService" });
    this.userDomainRepository = params.userDomainRepository;
    this.crypto = new Crypto();
  }

  /** ヘルスチェック */
  // async healthCheck(req: Request): Promise<{ userId: string }> {
  //   const { id } = this.crypto.jwtVerify(req);

  //   return { userId: id };
  // }

  /** SignUp */
  async signUp(user: IUser): Promise<IUser> {
    //  idが既に利用されていないか確認
    // const idValidation = await this.userDomainRepository.findOne(
    //   { id: user.id },
    //   {}
    // );
    // if (idValidation) {
    //   throw new ValidationError({
    //     id: {
    //       messageJP: "既に使われているUserIDです",
    //       messageEN: "This UserID is already in use."
    //     }
    //   });
    // }

    //  emailが既に利用されていないか確認
    const emailValidation = await this.userDomainRepository.findOne(
      { email: user.email },
      {}
    );
    // if (emailValidation) {
    //   throw new ValidationError({
    //     email: {
    //       messageJP: "既に使われているメールアドレスです。",
    //       messageEN: "This mail address is already in use."
    //     }
    //   });
    // }

    //  パスワードの暗号化
    // const decodedPassword = this.crypto.decode(user.password);

    const result = await this.userDomainRepository.createOne({
      id: user.id,
      lastName: user.lastName,
      firstName: user.firstName,
      email: user.email,
      password: user.password
    });

    return result.toJson();
  }

  /** SignIn */
  // async signIn(userId: string, password: string): Promise<{ token: string }> {
  //   const user = await this.userDomainRepository.findOne({ id: userId }, {});

  // if (!user) return;
  // throw new ValidationError({
  //   id: {
  //     messageJP: "存在しないUserIDです",
  //     messageEN: "This UserID id not used."
  //   }
  // });
  // }

  // const encodedPassword = this.crypto.encode(user ? user.password : "");

  // if (encodedPassword !== password) {
  //   throw new ValidationError({
  //     password: {
  //       messageJP: "パスワードが違います。",
  //       messageEN: "This password is incorrect."
  //     }
  //   });
  // }

  //   const token = this.crypto.jwtSign({ id: userId });

  //   return { token };
  // }

  /** 新規登録 */
  async createUser(user: IUser): Promise<IUser> {
    const id = this.generateId();
    const result = await this.userDomainRepository.createOne({
      ...user,
      id
    });

    return result.toJson();
  }

  /** 取得 */
  async findUser(company_user_id: string): Promise<IUser> {
    const user = await this.userDomainRepository.findOne(
      { id: company_user_id },
      { projection: { _id: 0 } }
    );

    if (!user) throw new Error();

    // user.maskPassword();

    return user.toJson();
  }

  /** 取得 */
  async findUsers(limit: number): Promise<IUser[]> {
    const result = await this.userDomainRepository.find({}, limit, {
      projection: { _id: 0 }
    });

    return result.map(data => data.toJson());
  }

  /** 更新 */
  async updateUser(user: IUser): Promise<boolean> {
    await this.userDomainRepository.updateOne(
      { id: user.id },
      { $set: { user } }
    );

    return true;
  }

  /** 削除 */
  async deleteUser(userId: string): Promise<boolean> {
    await this.userDomainRepository.deleteOne({ id: userId });

    return true;
  }
}
