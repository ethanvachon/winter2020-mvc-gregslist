import { ProxyState } from "../AppState.js"
import {Car} from "../Models/models.js"
import { api } from "./AxiosService.js"

class CarsService {
  async bid(id, newPrice) {
    let carData = {price: newPrice}
    let res = await api.put("cars/"+id, carData)
    this.getCars()
  }
  async getCars(){
    let res = await api.get('cars')
    ProxyState.cars = res.data.map(i => new Car(i))
  }
  async deleteCar(id) {
    let res = await api.delete("cars/"+id)
    this.getCars()
  }
  async createCar(newCar) {
    let car = await api.post('cars', newCar)
    this.getCars()
  }

}
// Singleton Pattern
export const carsService = new CarsService()