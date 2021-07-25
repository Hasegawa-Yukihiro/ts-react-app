//  constants
// import { findCompanyUserApi } from "~api/CompanyUser/FindCompanyUser";
// import { healthCheckApi } from "~api/CompanyUser/HealthCheck";
// import { signInApi } from "~api/CompanyUser/SignIn";
import { signUpApi } from "~api/User/SignUp";
import { BaseDomainService } from "~utils/base/BaseDomainService";
import { initUser } from "./constants";

//  types
import { IUser } from "./types";

export class UserDomainService extends BaseDomainService {
  readonly initUser: IUser = initUser;
  private limit: number = 10;

  constructor(params?: { limit?: number }) {
    super();

    if (params?.limit) this.limit = params.limit;
  }

  /** SignUp */
  async signUp(user: IUser): Promise<{ user: IUser }> {
    const { data } = await signUpApi({ body: { user } });

    return {
      user: data.user
    };
  }

  /** SignIn */
  // async signIn(id: string, password: string): Promise<{ token: string }> {
  //   const { data } = await signInApi({ body: { id, password } });

  //   return { token: data.token };
  // }

  /** ヘルスチェック */
  // async healthCheck(): Promise<{ companyUserId: string }> {
  //   const { data } = await healthCheckApi({});

  //   return { companyUserId: data.company_user_id };
  // }

  /** Userの取得 */
  // async findCompanyUser(
  //   companyUserId: string
  // ): Promise<{ companyUser: IUser | null }> {
  //   const { data } = await findCompanyUserApi({
  //     path: { company_user_id: companyUserId }
  //   });

  //   return { companyUser: data.company_user };
  // }
}
