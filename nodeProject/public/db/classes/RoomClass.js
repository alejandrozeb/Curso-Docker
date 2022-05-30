export class RoomClass{
    static PenthouseCounter = 0;
    static MatrimonialCounter = 0;
    static DoubleCounter = 0;
    static SingleCounter = 0;
    setIdAndPrice(type){
        switch(type){
            case 'Penthouse':
                RoomClass.PenthouseCounter++;
                this.Id = RoomClass.PenthouseCounter<9?""+4+"0"+RoomClass.PenthouseCounter:''+4+RoomClass.PenthouseCounter;
                this.Price = 400;
                break;
            case 'Matrimonial':
                RoomClass.MatrimonialCounter++;
                this.Id = RoomClass.MatrimonialCounter<"9"?""+"3"+"0"+RoomClass.MatrimonialCounter:""+"3"+RoomClass.MatrimonialCounter;
                this.Price = 350;
                break;
            case 'Double':
                RoomClass.DoubleCounter++;
                this.Id = RoomClass.DoubleCounter<9?""+"2"+"0"+RoomClass.DoubleCounter:""+"2"+RoomClass.DoubleCounter;
                this.Price = 325;
                break;
            case 'Single':
                RoomClass.SingleCounter++;
                this.Id = RoomClass.SingleCounter<9?""+"1"+"0"+RoomClass.SingleCounter:""+"1"+RoomClass.SingleCounter;
                this.Price = 300;
                break;
        }
    }
    constructor(type, guest, partners, checkIn, checkOut, reservationType, roomStatus){
        this.setIdAndPrice(type);
        this.Type = type;
        this.Guest = guest;
        this.Partners = partners;
        this.CheckIn = checkIn;
        this.CheckOut = checkOut;
        this.ReservationType = reservationType;
        this.RoomStatus = roomStatus;
    }
}

var roomType = [
    "Single","Double","Matrimonial","Penthouse"
]