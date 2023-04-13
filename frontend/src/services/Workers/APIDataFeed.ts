import ApiService from "@/services/api.service"

export interface DataItem {
  name: string,
  value: string
}

interface DataItemList {
  datalist: DataItem[]
}

export class APIDataFeed {
  constructor(private readonly request = ApiService) {
  }

  async GetData() : Promise<DataItem[]> {
    const url = '/datafeed'
    const response = await this.request.get(url)
    const dataItemList: DataItemList = response.data
    return dataItemList.datalist
  }
}
