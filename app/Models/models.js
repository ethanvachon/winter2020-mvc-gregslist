import { generateId } from "../Utils/GenerateId.js"

export class Car {
  constructor({ make, model, year, price, description, imgUrl, _id }) {
    this.id = _id
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.description = description
    this.imgUrl = imgUrl
  }

  get Template() {
    return `
    <div class="col-md-4 col-6 mt-3">
    <div class="card">
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.make} - ${this.model} - ${this.year}</h4>
            <p class="card-text">${this.description}</p>
            <p class="card-text">${this.price}</p>
            <div class="text-right">
            <button type="button" class="btn btn-success" onclick="app.carsController.bid('${this.id}', '${this.price += 500}')">Bid</button>
                <button type="button" class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">Delete</button>
            </div>
        </div>
    </div>
    </div>
        `
  }
}


export class House {
  constructor({ bedrooms, bathrooms, levels, imgUrl, year, price, description, _id }) {
    this.id = _id
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.levels = levels
    this.imgUrl = imgUrl
    this.year = year
    this.price = price
    this.description = description
  }

  get Template() {
    return `
    <div class="col-md-4 col-6 mt-3">
    <div class="card">
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.bedrooms} Bed- ${this.bathrooms} Bath- ${this.levels} Level</h4>
            <p class="card-text">${this.year}</p>
            <p class="card-text">${this.description}</p>
            <p class="card-text">${this.price}</p>
            <div class="text-right">
            <button type="button" class="btn btn-success" onclick="app.houseController.bid('${this.id}', '${this.price += 500}')">Bid</button>
                <button type="button" class="btn btn-danger" onclick="app.houseController.deleteHouse('${this.id}')">Delete</button>
            </div>
        </div>
    </div>
    </div>
        `
  }
}

export class Job {
  constructor({ company, jobTitle, hours, rate, description, _id }) {
    this.id = _id
    this.company = company
    this.jobTitle = jobTitle
    this.hours = hours
    this.rate = rate
    this.description = description
  }

  get Template() {
    return `
    <div class="col-md-4 col-6 mt-3">
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">${this.company} - ${this.jobTitle}</h4>
            <h5 class="card-text">${this.hours} hours at ${this.rate}/hour</h5>
            <p class="card-text">${this.description}</p>
            <div class="text-right">
                <button type="button" class="btn btn-danger" onclick="app.jobController.deleteJob('${this.id}')">Delete</button>
            </div>
        </div>
    </div>
    </div>
        `
  }
}
