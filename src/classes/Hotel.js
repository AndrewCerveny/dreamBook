class Hotel {
    constructor(roomsData, guestsData, bookingsData, currentGuest) {
        this.rooms = roomsData;
        this.guests = guestsData;
        this.bookings = bookingsData;
        this.currentGuest = currentGuest;
        
    }
    displayFreeRooms(chosenDate) {
        let chosenDateObj = new Date(chosenDate)
        let compareDate = chosenDateObj.getDate()
 
        const openRooms = this.bookings.filter((booking) => new Date(booking.date).getDate() !== compareDate) 
        
        return openRooms
    }
    showAllRoomTypes() {
      const roomTypes = this.rooms.map((room) => room.roomType)
      return roomTypes
    }
}





export default Hotel;