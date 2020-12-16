import {ProxyState} from "../AppState.js"
import {houseService} from "../Services/HouseService.js"

function _drawHouses (){
  let house = ProxyState.houses
  let template = ''
  house.forEach(house => {
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}


export default class HouseController{
  constructor(){
    ProxyState.on('houses', _drawHouses)
    _drawHouses()
  }


  createHouse(){
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
    houseService.createHouse(newHouse)
    // @ts-ignore
    form.reset()
    // @ts-ignore
    $("#new-house-modal").modal('hide');
  }

  deleteHouse(id){
    houseService.deleteHouse(id)
  }
}