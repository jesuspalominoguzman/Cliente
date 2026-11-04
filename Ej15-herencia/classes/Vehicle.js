export class Vehicle {
    #id
    #brand
    #model
    #year
    pricePerDay
    available

    constructor(vehicleData) {
        this.#id = vehicleData.id
        this.#brand = vehicleData.brand
        this.#model = vehicleData.model
        this.#year = vehicleData.year
        this.pricePerDay = vehicleData.pricePerDay
        this.available = vehicleData.available
    }

    getInfo() {
        return `ID: ${this.#id}, Brand: ${this.#brand}, Model: ${this.#model}, Year: ${this.#year}, Price per day: ${this.pricePerDay}, Available: ${this.available}`
    }

    calculateRentalPrice(days)  {
        return this.pricePerDay * days
    }

    isAvailable() {
        return this.available
    }

    get id() {
        return this.#id
    }

    get brand() {
        return this.#brand
    }   

    get model() {
        return this.#model
    }       

    get year() {
        return this.#year
    }       

    set id (id) {
        this.#id = id
    }

    set brand (brand) {
        this.#brand = brand
    }   

    set model (model) {
        this.#model = model
    }   

    set year (year) {
        this.#year = year
    }   

}