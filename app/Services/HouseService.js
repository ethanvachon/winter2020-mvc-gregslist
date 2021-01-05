import {ProxyState} from "../AppState.js"
import {House} from "../Models/models.js"
import { api } from "./AxiosService.js"

class HouseService {
  async bid(id, newPrice) {
    let houseData = {price: newPrice}
    let res = await api.put("houses/"+id, houseData)
    this.getHouses()
  }
  async getHouses() {
    let res = await api.get("houses")
    ProxyState.houses = res.data.map(i => new House(i))
  }
  async deleteHouse(id){
    let house = await api.delete("houses/"+id)
    this.getHouses()
  }

  async createHouse(newHouse){
    let house = await api.post('houses', newHouse)
    this.getHouses()
  }
}

export const houseService = new HouseService()