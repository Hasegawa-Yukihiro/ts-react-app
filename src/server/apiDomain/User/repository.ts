import { BaseDomainRepositoryImpl } from "~apiDomain/BaseDomainRepositoryImplements";
import { BaseDomainRepository } from "~apiDomain/BaseDomainRepository";
import { User } from ".";
import { IUser } from "./types";
import {
  CollectionInsertOneOptions,
  CommonOptions,
  FilterQuery,
  FindOneOptions,
  ObjectId,
  OptionalId,
  UpdateQuery,
  WithoutProjection
} from "mongodb";
// import { MongoError } from "~utils/modules/Error";

export class UserDomainRepository
  extends BaseDomainRepository
  implements BaseDomainRepositoryImpl<User, IUser>
{
  constructor() {
    super({
      className: "UserDomainRepository",
      collectionName: "company_user",
      limit: 100
    });
  }

  async findOne(
    filter: FilterQuery<IUser>,
    option: FindOneOptions<IUser>
  ): Promise<User | null> {
    // try {
    const result = await this.mongoDB
      .collection<IUser>(this.collectionName)
      .findOne(filter, option as WithoutProjection<FindOneOptions<IUser>>);

    if (result) {
      return new User(result);
    } else {
      return result;
    }
    // } catch (error) {
    //   throw new MongoError();
    //   console.log(error);
    // }
  }

  async find(
    filter: FilterQuery<IUser>,
    limit: number,
    option: FindOneOptions<IUser>
  ): Promise<User[]> {
    try {
      const result = await this.mongoDB
        .collection<IUser>(this.collectionName)
        .find(filter, option as WithoutProjection<FindOneOptions<IUser>>)
        .limit(limit || 100)
        .toArray();

      return result.map(user => new User(user));
    } catch (error) {
      throw new Error();
    }
  }

  async createOne(
    data: IUser,
    option?: CollectionInsertOneOptions
  ): Promise<User> {
    // try {
    await this.mongoDB
      .collection<IUser>(this.collectionName)
      .insertOne(data as OptionalId<IUser & { _id: ObjectId }>, option);

    return new User(data);
    // } catch (error) {
    //   // throw new MongoError(error);
    //   console.log(error);
    // }
  }

  async deleteOne(
    filter: FilterQuery<IUser>,
    option?: CommonOptions & { bypassDocumentValidation?: boolean }
  ): Promise<boolean> {
    // try {
    await this.mongoDB
      .collection<IUser>(this.collectionName)
      .deleteOne(filter, option);

    return true;
    // } catch (error) {
    //   // throw new MongoErr_or(error);
    //   console.log(error);
    // }
  }

  async updateOne(
    filter: FilterQuery<IUser>,
    update: UpdateQuery<IUser> | Partial<IUser>
  ): Promise<boolean> {
    // try {
    await this.mongoDB
      .collection<IUser>(this.collectionName)
      .updateOne(filter, update);

    return true;
    // } catch (error) {
    //   // throw new MongoError(error);
    //   console.log(error);
    // }
  }
}
