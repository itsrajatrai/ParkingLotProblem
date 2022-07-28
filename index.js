
const parking = require('./parking')
const fs = require('fs');

// split the input file into an array of lines
let input = fs.readFileSync('./input.txt', 'utf8').split('\n');

// split each line of input into an array of words
for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(' ');
    let command = input[i][0];
    if (command === 'Create_parking_lot') {
        parking.createParkingLot(input[i][1]);
        console.log(" ");
    }
    else if (command === 'Park') {
        parking.parkCar(input[i][1], input[i][3]);
        console.log(" ");
    }
    else if (command === 'Leave') {
        parking.removeCar(input[i][1]);
        console.log(" ");
    }
    else if (command === 'Slot_numbers_for_driver_of_age') {
        parking. getSlotNumbersForDriverOfAge(input[i][1]);
        console.log(" ");
    }
    else if (command === 'Vehicle_registration_numbers_for_driver_of_age') {
        parking. getVehicleRegistrationNumberForDriverOfAge(input[i][1]);
        console.log(" ");
    }
    else if (command === 'Slot_number_for_car_with_number') {
        parking.getSlotNumberForCarWithNumber(input[i][1]);
        console.log(" ");
    }
    
}

