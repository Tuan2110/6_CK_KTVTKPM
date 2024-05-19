import { AxiosInstance } from 'axios'
import { UserAPI } from '@/api/users'
import { AuthAPI } from '@/api/auths'

export class Api<T extends unknown> {
  public readonly users: UserAPI
  public readonly auths: AuthAPI

  constructor(axios: AxiosInstance) {
    this.users = new UserAPI(axios)
    this.auths = new AuthAPI(axios)
  }
}
