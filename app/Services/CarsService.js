import { ProxyState } from "../AppState.js"
import {Car} from "../Models/models.js"

class CarsService {
  deleteCar(id) {
    ProxyState.cars = ProxyState.cars.filter(car => car.id != id)
  }
  createCar(newCar) {
    console.log("SERVICE: createCar", 2)
    let car = new Car(newCar)
    console.log(4)
    ProxyState.cars = [...ProxyState.cars, car]
    console.log(6)
  }

}
// Singleton Pattern
export const carsService = new CarsService()