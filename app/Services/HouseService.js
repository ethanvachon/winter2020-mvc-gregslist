import {ProxyState} from "../AppState.js"
import {House} from "../Models/models.js"

class HouseService {
  deleteHouse(id){
    ProxyState.houses = ProxyState.houses.filter(house => house.id != id)
  }

  createHouse(newHouse){
    let house = new House(newHouse)
    ProxyState.houses = [...ProxyState.houses, house]
  }
}

export const houseService = new HouseService()