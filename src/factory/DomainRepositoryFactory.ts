//  domain
import { UserDomainRepository } from "~apiDomain/User/repository";

export class DomainRepositoryFactory {
  readonly userDomainRepository: UserDomainRepository;

  constructor() {
    this.userDomainRepository = new UserDomainRepository();
  }
}
