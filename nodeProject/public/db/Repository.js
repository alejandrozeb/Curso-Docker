import {PersonClass} from './classes/PersonClass.js';
import {RoomClass} from './classes/RoomClass.js';
import {HotelClass} from './classes/HotelClass.js';
export class Repository{
 static fullRepository(){
     var personArray = [];
    personArray = [new PersonClass(personArray.length,"Jean","Santivanez","72971718"),
    new PersonClass(personArray.length,"María Fe","Bravo","74582356"),
    new PersonClass(personArray.length,"Juan","Pérez","74589623"),
    new PersonClass(personArray.length,"José","Jimenez","78952348"),
    new PersonClass(personArray.length,"Aldo","Vargas","45698753"),
    new PersonClass(personArray.length,"Alejandro","Quiñones","75698754")];

var RoomArray = [new RoomClass('Single',null,null,null,null, null,"Available"),
    new RoomClass('Single', null, null, null, null, null, "Available" ),
    new RoomClass('Single', null, null, null, null, null, "Available" ),
    new RoomClass('Single', personArray[4], null, "2022-05-30", "2022-06-03", "Reservation", "Reserved" ),
    new RoomClass('Single', null, null, null, null, null, "Available" ),
    new RoomClass('Single', personArray[2], null, "2022-07-25", "2022-07-30", "Reservation", "Reserved" ),
    new RoomClass('Single', null, null, null, null, null, "Available" ),
    new RoomClass('Double', null, null, null, null, null, "Available" ),
    new RoomClass('Double', null, null, null, null, null, "Available" ),
    new RoomClass('Double', null, null, null, null, null, "Available" ),
    new RoomClass('Double', null, null, null, null, null, "Available" ),
    new RoomClass('Double', null, null, null, null, null, "Available" ),
    new RoomClass('Matrimonial', personArray[0], personArray[1], "2022-07-01", "2022-07-08", "Reservation", "Reserved" ),
    new RoomClass('Matrimonial', null, null, null, null, null, "Available" ),
    new RoomClass('Matrimonial', personArray[3], null, "2022-06-20", "2022-06-21", "Reservation", "Reserved" ),
    new RoomClass('Matrimonial', null, null, null, null, null, "Available" ),
    new RoomClass('Penthouse', null, null, null, null, null, "Available" ),
    new RoomClass('Penthouse', null, null, null, null, null, "Available" ),
    new RoomClass('Penthouse', personArray[5], null, "2022-07-10", "2022-07-15", "Reservation", "Reserved" )]
    HotelClass.set(RoomArray,personArray);
 }
}
