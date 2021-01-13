import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"
import { houseService } from "../Services/HouseService.js"

function _drawHouses() {
  let house = ProxyState.houses
  let template = ''
  house.forEach(house => {
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}


export default class HouseController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
    this.getHouses()
    _drawHouses()
  }
  getHouses() {
    try {
      houseService.getHouses()
    } catch (error) {
      console.error(error)
    }
  }


  createHouse() {
    window.event.preventDefault()
    let form = window.event.target
    let newHouse = {
      bedrooms: form['bedrooms'].value,
      bathrooms: form['bathrooms'].value,
      levels: form['levels'].value,
      imgUrl: form['imgUrl'].value,
      year: form['year'].value,
      price: form['price'].value,
      description: form['description'].value,
    }
    try {
      houseService.createHouse(newHouse)
    } catch (error) {
      console.error(error)
    }
    // @ts-ignore
    form.reset()
    // @ts-ignore
    $("#new-house-modal").modal('hide');
  }

  deleteHouse(id) {
    try {
      houseService.deleteHouse(id)
    } catch (error) {
      console.error(error)
    }
  }
  bid(id, price) {
    try {
      houseService.bid(id, price)
    } catch (error) {
      console.error(error)
    }
  }
}