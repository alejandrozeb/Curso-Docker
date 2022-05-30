export class HotelClass{
    static rooms;
    static client
    static set(rooms,clients){
        HotelClass.rooms = rooms;
        HotelClass.clients = clients;
    }
    static addRoom(room){
        HotelClass.rooms.push(room);
    }
    static addClient(client){
        HotelClass.clients.push(client);
    }
    static listAllRooms(){
        return HotelClass.rooms;
    }
    static listAllClients(){
        return HotelClass.clients;
    }
}