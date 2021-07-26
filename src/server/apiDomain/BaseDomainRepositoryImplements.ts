import {
  CollectionInsertOneOptions,
  CommonOptions,
  FilterQuery,
  FindOneOptions,
  UpdateQuery
} from "mongodb";

export interface BaseDomainRepositoryImpl<Entity, IData> {
  findOne: (
    filter: FilterQuery<IData>,
    option: FindOneOptions<IData>
  ) => Promise<Entity | null>;

  find: (
    filter: FilterQuery<IData>,
    limit: number,
    option: FindOneOptions<IData>
  ) => Promise<Entity[]>;

  createOne: (
    data: IData,
    option?: CollectionInsertOneOptions
  ) => Promise<Entity>;

  updateOne: (
    filter: FilterQuery<IData>,
    update: UpdateQuery<IData> | Partial<IData>
  ) => Promise<boolean>;

  deleteOne: (
    filter: FilterQuery<IData>,
    option?: CommonOptions & { bypassDocumentValidation?: boolean }
  ) => Promise<boolean>;
}
