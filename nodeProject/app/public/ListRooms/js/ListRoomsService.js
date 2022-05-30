import { HotelClass } from '../../db/classes/HotelClass.js';

export default class RoomService {
    UpdateRoomList(){
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
}