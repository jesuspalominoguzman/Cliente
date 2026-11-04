import { Car } from "./car.js"
import { Motorcycle } from "./Motorcycle.js"
import { Van } from "./Van.js"
import { response } from "./inheritance.js"

const vehicles = [
    new Car(response.data[0]),
    new Motorcycle(response.data[1]),
    new Van(response.data[2]),
]

vehicles.forEach(vehicle => vehicles){
    console.log(vehicle.getInfo())
    console.log(`Rental Price for 5 days: ${vehicle.calculateRentalPrice(5)}`)
    console.log(`Rental Price for 10 days: ${vehicle.calculateRentalPrice(10)}`)
    console.log('-----------------------------')
}