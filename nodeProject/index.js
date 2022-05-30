/* import {Repository} from './public/db/Repository.js';
import { HotelClass } from './public/js/classes/HotelClass.js';
import { PersonClass } from './public/js/classes/PersonClass.js';

import { showList } from './public/js/list-reservation.js'; */

import {HtmlLoader} from './public/Loader/HtmlLoader.js';

window.addEventListener("DOMContentLoaded", () => {
    console.log("aaa");
    HtmlLoader();
    //showHome();
});
/* 
Repository.fullRepository();
//variables
let firstNameGuest = document.getElementById('fName1');
let lastNameGuest = document.getElementById('lName1');
let numberDNIGuest = document.getElementById('identity');
let partnerGuestCheck = document.getElementById('partner');
let companion = document.getElementById('partner');
let firstNamePartner = document.getElementById('fName2');
let lastNamePartner = document.getElementById('lName2');

let dateCheckinRoom = document.getElementById('check-in');
let dateCheckoutRoom = document.getElementById('check-out');
let penthouseRoom = document.getElementById('penthouse');
let matrimonialRoom = document.getElementById('matrimonial');
let doubleRoom = document.getElementById('double');
let singleRoom = document.getElementById('single');
let numberRoomSelected = document.getElementById('room');
let reservationType = document.getElementsByClassName('reservation_type');
let btnEnviar = document.getElementById('enviar');
let formGuest = document.getElementById('form');

eventListeners();

function eventListeners(){
     document.addEventListener('DOMContentLoaded', startApp);
    
    firstNameGuest.addEventListener('blur', validateNameGuest);
    lastNameGuest.addEventListener('blur', ValidateLastNameGuest);
    numberDNIGuest.addEventListener('blur', ValidateDNI);
    partnerGuestCheck.addEventListener('blur', ablePartner);
    firstNamePartner.addEventListener('blur', validateNamePartner);
    lastNamePartner.addEventListener('blur', ValidateLastNamePartner);
   
    dateCheckinRoom.addEventListener('blur', validateDateCheckin);
    dateCheckoutRoom.addEventListener('blur', validateDateCheckOut);
    penthouseRoom.addEventListener('click', chargePenthouseRooms);
    matrimonialRoom.addEventListener('click', chargeMatrimonialRooms);
    doubleRoom.addEventListener('click', chargeDoubleRooms);
    singleRoom.addEventListener('click', chargeSingleRooms);
    numberRoomSelected.addEventListener('blur', validarCampos);

    formGuest.addEventListener('submit', sendReservation);
}

function startApp(){
    console.log(HotelClass.rooms);
    chargePenthouseRooms();
}

function sendReservation(e){
    e.preventDefault();
    makeReservation();   
}

function validarCampos() {
    console.log("Validar");
}

function validateNameGuest() {
    let name = firstNameGuest.value;
    let regex = /^[a-zA-Z]*$/;

    if(name.length < 3 || regex.exec(name) == null){
        firstNameGuest.style.borderColor = "red";
        firstNameGuest.style.borderWidth = "2px";
        firstNameGuest.style.borderStyle = "solid";
        console.log("Invalid Name");
    } else{
        firstNameGuest.style.borderColor = "green";
        firstNameGuest.style.borderWidth = "2px";
        firstNameGuest.style.borderStyle = "solid";
        console.log("Valid Name");
    }
}

function ValidateLastNameGuest() {
    let lastName = lastNameGuest.value;
    let regex = /^[a-zA-Z]*$/;

    if(lastName.length < 3 || regex.exec(lastName) == null){
        lastNameGuest.style.borderColor = "red";
        lastNameGuest.style.borderWidth = "2px";
        lastNameGuest.style.borderStyle = "solid";
        console.log("Invalid Name");
    } else{
        lastNameGuest.style.borderColor = "green";
        lastNameGuest.style.borderWidth = "2px";
        lastNameGuest.style.borderStyle = "solid";
        console.log("Valid Name");
    }
}
function ValidateDNI() {
    let lastName = numberDNIGuest.value;
    let regex = /[0-9]/;

    if(regex.exec(lastName) == null || lastName.length < 5){
        numberDNIGuest.style.borderColor = "red";
        numberDNIGuest.style.borderWidth = "2px";
        numberDNIGuest.style.borderStyle = "solid";
    } else{
        numberDNIGuest.style.borderColor = "green";
        numberDNIGuest.style.borderWidth = "2px";
        numberDNIGuest.style.borderStyle = "solid";
    }
}

function validateNamePartner() {
    let name = firstNamePartner.value;
    let regex = /^[a-zA-Z]*$/;

    if(name.length < 3 || regex.exec(name) == null){
        firstNamePartner.style.borderColor = "red";
        firstNamePartner.style.borderWidth = "2px";
        firstNamePartner.style.borderStyle = "solid";
        console.log("Invalid Name");
    } else{
        firstNamePartner.style.borderColor = "green";
        firstNamePartner.style.borderWidth = "2px";
        firstNamePartner.style.borderStyle = "solid";
        console.log("Valid Name");
    }
}

function ValidateLastNamePartner() {
    let lastName = lastNamePartner.value;
    let regex = /^[a-zA-Z]*$/;

    if(lastName.length < 3 || regex.exec(lastName) == null){
        lastNamePartner.style.borderColor = "red";
        lastNamePartner.style.borderWidth = "2px";
        lastNamePartner.style.borderStyle = "solid";
        console.log("Invalid Name");
    } else{
        lastNamePartner.style.borderColor = "green";
        lastNamePartner.style.borderWidth = "2px";
        lastNamePartner.style.borderStyle = "solid";
        console.log("Valid Name");
    }
}

function ablePartner(){
    if(partnerGuestCheck.checked){
        firstNamePartner.removeAttribute('disabled');
        firstNamePartner.required = true;
        lastNamePartner.removeAttribute('disabled');
        lastNamePartner.required = true;
    }else{
        firstNamePartner.setAttribute('disabled', true);
        lastNamePartner.setAttribute('disabled', true);
    }
}

function makeReservation(){
    let guest = new PersonClass(HotelClass.listAllClients().length,firstNameGuest.value, lastNameGuest.value, numberDNIGuest.value);
    let partner;
    if(companion.checked){
        partner = new PersonClass(HotelClass.listAllClients().length,firstNamePartner.value, lastNamePartner.value, "-");
    }
    let typeRoom = "";
    
    if(penthouseRoom.checked){
        typeRoom = "Penthouse";
    }else if (matrimonialRoom.checked){
        typeRoom = "Matrimonial";
    }else if (doubleRoom.checked){
        typeRoom = "Double";
    }else if (singleRoom.checked){
        typeRoom = "Single";
    }         

    let currentRoom = HotelClass.rooms.find(room => room.Type === typeRoom && room.Id === numberRoomSelected.value && room.RoomStatus === "Available");
    console.log(currentRoom);
    if (currentRoom !== undefined){
        currentRoom.Guest = guest;
        currentRoom.Partners = partner!=null?partner:null;
        currentRoom.CheckIn = dateCheckinRoom.value;
        currentRoom.CheckOut = dateCheckoutRoom.value;
        currentRoom.ReservationType = reservationType.value;
        currentRoom.RoomStatus = "Reserved";
        console.log(currentRoom);
        formGuest.reset();
        HotelClass.addClient(guest);
        if(partner !== null)HotelClass.addClient(partner);
        showList();
        chargePenthouseRooms();
        UpdateRoomList()
    }else{
        console.log("No Available room please select other");
    }
}

function chargeMatrimonialRooms(){
    if(matrimonialRoom.checked){
        changeSelectOptions("Matrimonial");
    }
}

function chargeDoubleRooms(){
    if(doubleRoom.checked){
        changeSelectOptions("Double");
    }
}

function chargeSingleRooms(){
    if(singleRoom.checked){    
        changeSelectOptions("Single");
    }
}

function chargePenthouseRooms(){
    if(penthouseRoom.checked){
        changeSelectOptions("Penthouse");
    }
}

function changeSelectOptions(typeRooom){
    numberRoomSelected.options.length = 0;
    let changeRooms = HotelClass.rooms.filter(room => room.Type === typeRooom && room.RoomStatus === "Available");
    let price = 0;
    if(changeRooms !== undefined){
        changeRooms.forEach(room => {
            let option = document.createElement('option');
            option.value = room.Id;
            option.text = room.Id;
            numberRoomSelected.appendChild(option);
            price = room.Price;
        });
        document.querySelector('.form-container__field-price').children[0].innerHTML = price;
    }else{
        console.log(`No Available ${typeRooom} rooms please select otherType`);
    }
}

function validateDateCheckin(){
    let checkInDate = dateCheckinRoom.value;
    let checkOutDate = dateCheckoutRoom.value;
    let today = new Date();

    console.log(checkInDate + "in");
    console.log(checkOutDate + "out");
    if(checkInDate === ""){
        dateCheckinRoom.style.borderColor = "red";
        dateCheckinRoom.style.borderWidth = "2px";
        dateCheckinRoom.style.borderStyle = "solid";
    }else if(checkInDate > checkOutDate && checkOutDate !== ""){
        dateCheckinRoom.style.borderColor = "red";
        dateCheckinRoom.style.borderWidth = "2px";
        dateCheckinRoom.style.borderStyle = "solid";
    }else{
        dateCheckinRoom.style.borderColor = "green";
        dateCheckinRoom.style.borderWidth = "2px";
        dateCheckinRoom.style.borderStyle = "solid";
    }
}

function validateDateCheckOut(){
    let checkOutDate = dateCheckoutRoom.value;
    let checkInDate = dateCheckinRoom.value;

    if(checkOutDate === ""){
        dateCheckoutRoom.style.borderColor = "red";
        dateCheckoutRoom.style.borderWidth = "2px";
        dateCheckoutRoom.style.borderStyle = "solid";
    }else if(checkOutDate < checkInDate && checkInDate !== ""){
        dateCheckoutRoom.style.borderColor = "red";
        dateCheckoutRoom.style.borderWidth = "2px";
        dateCheckoutRoom.style.borderStyle = "solid";
    }else{
        dateCheckoutRoom.style.borderColor = "green";
        dateCheckoutRoom.style.borderWidth = "2px";
        dateCheckoutRoom.style.borderStyle = "solid";
    }
}

function UpdateRoomList(){
    var room_table = document.getElementById('room_data');
    room_table.innerHTML = "";
    HotelClass.listAllRooms().forEach(room => {
        var Rid = document.createTextNode(room.Id);
        let Rtype = document.createTextNode(room.Type);
        let Rguest = document.createTextNode(room.Guest? room.Guest?.FirstName+" "+room.Guest?.LastName : "No Guest");
        let Rpartner = document.createTextNode(room.Partners? room.Partners?.FirstName+" "+room.Partners?.LastName : "No Partner");
        let Rcheckin = document.createTextNode(room.CheckIn? room.CheckIn : "No CheckIn");
        let Rcheckout = document.createTextNode(room.CheckOut? room.CheckOut : "No CheckOut");
        let RresType = document.createTextNode(room.ReservationType? room.ReservationType : "No Reservation");
        let Rstatus = document.createTextNode(room.RoomStatus);
        let Rprice = document.createTextNode(room.Price);
        let arr = [Rid,Rtype,Rguest,Rpartner,Rcheckin,Rcheckout,RresType,Rstatus,Rprice];
        var newRow = room_table.insertRow();
        var newCell;
        arr.forEach(element => {
            newCell = newRow.insertCell();
            if(element.data == room.Id) newCell.style.fontWeight = "bold";
            if(room.RoomStatus === "Reserved"){
                newCell.style.fontWeight = "bold";
                newCell.style.backgroundColor = "#ff6969";
            }
            newCell.appendChild(element);
        });
    })
}
// UpdateRoomList()

 */