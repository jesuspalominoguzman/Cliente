import { Vehicle } from "./Vehicle.js"

export class Car extends Vehicle {
    doors
    seats

    constructor(vehicleData) {
        super(vehicleData)
        this.doors = vehicleData.doors
        this.seats = vehicleData.seats
    }

    getInfo() {
        return `${super.getInfo()}, Doors: ${this.doors}, Seats: ${this.seats}`
    }

    calculateRentalPrice(days)  {

        if (days > 7) {
            return super.calculateRentalPrice(days) * 0.9
        }else{
            return super.calculateRentalPrice(days)
        }
    }

    

}