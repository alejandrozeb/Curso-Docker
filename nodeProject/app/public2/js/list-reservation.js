const rList = document.getElementById("reservarion-list");
import { HotelClass } from './classes/HotelClass.js';

export function showList () {
  const rooms = HotelClass.listAllRooms();
  if (rooms == undefined) return
  
  console.log(rooms.length);
  let displayMenu = rooms.map((item) => {
    if (item.Guest == null) {
      return '';
    }
    console.log(item.Guest.FirstName)
    return `<tr>
              <td>${item.Id}</td>
              <td>${item.Guest.FirstName} ${item.Guest.LastName}</td>
              <td>${item.Guest.NumberIdentification}</td>
              <td>${`${item.Partners ? 'No':'Yes'}`}</td>
              <td>${item.CheckIn}</td>
              <td>${item.CheckOut}</td>
              <td>${item.Type}</td>
              <td>---</td>
            </tr>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);
  rList.innerHTML = displayMenu;
}
