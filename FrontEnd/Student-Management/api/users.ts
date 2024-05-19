import { BaseApi } from '@/api/base'

export class UserAPI extends BaseApi {
  user(): Promise<any> {
    return this.get('/students/profile')
  }

  calendar(): Promise<any> {
    return this.get('/students/calendar')
  }

  totalCredit(): Promise<any> {
    return this.get('/students/total-credit')
  }

  totalCreditCompleted(): Promise<any> {
    return this.get('/students/total-credit-completed')
  }
}
