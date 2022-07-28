/* Created by: Rajat Kumar Rai

*/

class ParkingLot {
  constructor() {
    this.hashTable = {};
  }


  // Create_parking_lot 5
  createParkingLot(numberOfSlots){
    for (let i = 0; i < numberOfSlots; i++) {
      this.hashTable[i] = null;
    }
    console.log("Created parking of " + numberOfSlots + " slots");
  }

  // get the number of slots in the parking lot
    getNumberOfSlots(){
        return Object.keys(this.hashTable).length;
        }

// get the number of empty slots in the parking lot
    getNumberOfEmptySlots(){
        let emptySlots = 0;
        for (let i = 0; i < this.getNumberOfSlots(); i++) {
            if (this.hashTable[i] === null) {
                emptySlots++;
            }
        }
        return emptySlots;

    }
//get first empty slot
    getFirstEmptySlot(){
        for (let i = 0; i < this.getNumberOfSlots(); i++) {
            if (this.hashTable[i] === null) {
                return i;
            }
        }
    }

// park a car in the parking lot
    parkCar(registrationNumber, age){
        let emptySlots = this.getNumberOfEmptySlots();
        if (emptySlots === 0) {
            console.log("Sorry, parking lot is full");
        } 
        else {
            // get the first empty slot
            let slotNumber = this.getFirstEmptySlot();
            this.hashTable[slotNumber] = {
                registrationNumber: registrationNumber,
                age: age
            };
            //decrease the empty slot by 1
            this.emptySlots--;
            console.log("Car with vehicle registration number " + registrationNumber + " has been parked at slot number " + (slotNumber+1));

        }
    }
// remove a car from the parking lot
    removeCar(slotNumber){
        if (this.hashTable[slotNumber] === null) {
            console.log("Slot is empty");
        } else {
            // get the registration number of the car that is removed
            let Number= this.hashTable[slotNumber].registrationNumber;  
            //get the age of the of the driver
            let age = this.hashTable[slotNumber].age;
            this.hashTable[slotNumber] = null;
            //increse the empty slot by 1
            this.emptySlots++;
            console.log("Slot number " + (slotNumber+1)+ " vacated, the car with vehicle registration number " +Number+ " left the space, the driver of the car was of age " + age);

        }


    }
//Slot_numbers_for_driver_of_age 21
    getSlotNumbersForDriverOfAge(age){
        for (let i = 0; i < this.getNumberOfSlots(); i++) {
            if (this.hashTable[i] !== null && this.hashTable[i].age === age) {
               // print the slot number in the same line and separate them by a comma without a space

               process.stdout.write(i+1 + ",");
            }
        }
        console.log("");
    }

//Slot_number_for_car_with_number PB-01-HH-1234
    getSlotNumberForCarWithNumber(registrationNumber){
        for (let i = 0; i < this.getNumberOfSlots(); i++) {
            if (this.hashTable[i] !== null && this.hashTable[i].registrationNumber === registrationNumber) {
                return i+1;
            }
        }
        return -1;
    }


//Vehicle_registration_number_for_driver_of_age 18
    getVehicleRegistrationNumberForDriverOfAge(age){
        let registrationNumbers = [];
        for (let i = 0; i < this.getNumberOfSlots(); i++) {
            if (this.hashTable[i] !== null && this.hashTable[i].age === age) {
                registrationNumbers.push(this.hashTable[i].registrationNumber);
            }
        }
        console.log(registrationNumbers);
        
    }
}

let parking = new ParkingLot();
module.exports = parking;


