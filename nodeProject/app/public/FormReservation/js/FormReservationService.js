import { HotelClass } from '../../db/classes/HotelClass.js';
import { PersonClass } from '../../db/classes/PersonClass.js';

export default class FormReservationService{

    makeReservationService(e){
        e.preventDefault();
        console.log(HotelClass.rooms);
    
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
        console.log("makeReservationService");
        
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
            //currentRoom.ReservationType = reservationType.value;
            currentRoom.RoomStatus = "Reserved";
            console.log(currentRoom);
            //e.reset();
            HotelClass.addClient(guest);
            if(partner !== null)HotelClass.addClient(partner);
            //showList();
            //chargePenthouseRooms();
            //UpdateRoomList()
        }else{
            console.log("No Available room please select other");
        }
        
    }
    
    chargeMatrimonialRooms(matrimonialRoom){
        if(matrimonialRoom == true){
            this.changeSelectOptions("Matrimonial");
        }
    }
    
    chargeDoubleRooms(doubleRoom){
        if(doubleRoom == true){
            this.changeSelectOptions("Double");
        }
    }
    
    chargeSingleRooms(singleRoom){
        if(singleRoom == true){    
            this.changeSelectOptions("Single");
        }
    }
    
    chargePenthouseRooms(penthouseRoom){
        if(penthouseRoom == true){
            this.changeSelectOptions("Penthouse");
        }
    }
    
    changeSelectOptions(typeRooom){
        let numberRoomSelected = document.getElementById('room');
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
    
}