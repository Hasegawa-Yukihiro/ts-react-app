import { DomainRepositoryFactory } from "./DomainRepositoryFactory";

//  domain
import { userDomainService } from "~apiDomain/User/service";

const domainRepositoryFactory = new DomainRepositoryFactory();

class DomainServiceFactory {
  userDomainService: userDomainService;

  constructor() {
    this.userDomainService = new userDomainService({
      userDomainRepository: domainRepositoryFactory.userDomainRepository
    });
  }
}

const domainServiceFactory = new DomainServiceFactory();

export { domainServiceFactory };
