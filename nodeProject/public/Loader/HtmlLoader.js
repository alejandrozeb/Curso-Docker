import htmlFormReservation from '../FormReservation/view/FormReservationView.js';
import htmlListRoom from '../ListRooms/view/ListRoomView.js';
import {Repository} from '../db/Repository.js';

export function HtmlLoader () {
    console.log('HomeService.js');
    window.document.getElementById("form-container").innerHTML = htmlFormReservation;
    window.document.getElementById("list-Rooms").innerHTML = htmlListRoom;
    //window.document.getElementById("feature").innerHTML = htmlFeature;
    Repository.fullRepository();
}