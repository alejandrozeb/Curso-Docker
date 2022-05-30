import { HotelClass } from '../db/classes/HotelClass.js';

window.addEventListener('load', ()=>{
    let form = document.getElementById('form');
    form.addEventListener('reset', ()=>{
        console.log('reset ---------Hola desde reset------------');
        console.log(HotelClass.listAllRooms());
    });
});