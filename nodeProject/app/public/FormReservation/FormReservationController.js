import FormReservationService from './js/FormReservationService.js';
import FormReservationValidation from './js/FormReservationValidation.js';

let formGuest;
let firstNameGues;
let lastNameGuest;
let numberDNIGuest;
let partnerGuestCheck; 
let companion;
let firstNamePartner; 
let lastNamePartner; 
let dateCheckinRoom;
let dateCheckoutRoom;
let penthouseRoom;
let matrimonialRoom;
let doubleRoom;
let singleRoom; 
let numberRoomSelected;
let btnEnviar;

let formValidator = new FormReservationValidation();
let formService = new FormReservationService();
window.addEventListener('load', function(){
    console.log('sdfdsfsd');
    formGuest = document.getElementById('form');
    firstNameGues = document.getElementById('fName1');
    lastNameGuest = document.getElementById('lName1'); 
    numberDNIGuest = document.getElementById('identity');
    partnerGuestCheck = document.getElementById('partner');
    companion = document.getElementById('partner');
    firstNamePartner = document.getElementById('fName2');
    lastNamePartner = document.getElementById('lName2');

    dateCheckinRoom = document.getElementById('check-in');
    dateCheckoutRoom = document.getElementById('check-out');
    penthouseRoom = document.getElementById('penthouse');
    matrimonialRoom = document.getElementById('matrimonial');
    doubleRoom = document.getElementById('double');
    singleRoom = document.getElementById('single');
    numberRoomSelected = document.getElementById('room');
    //reservationType = document.getElementsByClassName('reservation_type');
    btnEnviar = document.getElementById('enviar');

    formService.chargePenthouseRooms(true);
    eventListeners();
});
/* window.onload = function(){
    console.log('sdfdsfsd');
    formGuest = document.getElementById('form');
    firstNameGues = document.getElementById('fName1');
    lastNameGuest = document.getElementById('lName1'); 
    numberDNIGuest = document.getElementById('identity');
    partnerGuestCheck = document.getElementById('partner');
    companion = document.getElementById('partner');
    firstNamePartner = document.getElementById('fName2');
    lastNamePartner = document.getElementById('lName2');

    dateCheckinRoom = document.getElementById('check-in');
    dateCheckoutRoom = document.getElementById('check-out');
    penthouseRoom = document.getElementById('penthouse');
    matrimonialRoom = document.getElementById('matrimonial');
    doubleRoom = document.getElementById('double');
    singleRoom = document.getElementById('single');
    numberRoomSelected = document.getElementById('room');
    //reservationType = document.getElementsByClassName('reservation_type');
    btnEnviar = document.getElementById('enviar');

    formService.chargePenthouseRooms(true);
    eventListeners();
} */


function eventListeners(){
     //document.addEventListener('DOMContentLoaded', startApp);
    
     firstNameGues.addEventListener('blur',()=>{
        formValidator.validateNameGuest(firstNameGues);
     } );

    lastNameGuest.addEventListener('blur', () => {
        formValidator.ValidateLastNameGuest(lastNameGuest);
    });
    
    numberDNIGuest.addEventListener('blur', () => {
        formValidator.ValidateDNI(numberDNIGuest);
    });

    partnerGuestCheck.addEventListener('blur', () => {
        formValidator.ablePartner(partnerGuestCheck, firstNamePartner, lastNamePartner);
    });

    firstNamePartner.addEventListener('blur', () =>{
        formValidator.validateNamePartner(firstNamePartner);
    });

    lastNamePartner.addEventListener('blur', () => {
        formValidator.ValidateLastNamePartner(lastNamePartner);
    });
   
    dateCheckinRoom.addEventListener('blur', ()=>{
        formValidator.validateDateCheckin(dateCheckinRoom, dateCheckoutRoom);
    });

    dateCheckoutRoom.addEventListener('blur', ()=>{
        formValidator.validateDateCheckOut(dateCheckoutRoom, dateCheckinRoom);
    });

    penthouseRoom.addEventListener('click', () => {
        formService.chargePenthouseRooms(formService.chargePenthouseRooms(penthouseRoom.checked));
    });

    matrimonialRoom.addEventListener('click', () => {
        formService.chargeMatrimonialRooms(formService.chargeMatrimonialRooms(matrimonialRoom.checked));
    });

    doubleRoom.addEventListener('click', () =>{
        formService.chargeDoubleRooms(formService.chargeDoubleRooms(doubleRoom.checked));
    });

    singleRoom.addEventListener('click', () => {
        formService.chargeSingleRooms(formService.chargeSingleRooms(singleRoom.checked));
    });

    /* numberRoomSelected.addEventListener('blur', () =>{
        console.log(numberRoomSelected);
        formValidator.validateNumberRoom(numberRoomSelected);
    }); */

    formGuest.addEventListener('submit', (e) =>{
        formService.makeReservationService(e);   
        formGuest.reset()
    });
}