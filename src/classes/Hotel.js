import roomsData from "../../data/rooms-sample";

class Hotel {
    constructor(roomsData, guestsData, bookingsData,) {
        this.rooms = roomsData
        this.guests = guestsData
        this.bookings = bookingsData
        this.dashBoard = guestsData[8]
    }
    
}





export default Hotel;