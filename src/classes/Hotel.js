class Hotel {
    constructor(roomsData, guestsData, bookingsData, currentGuest) {
        this.rooms = roomsData;
        this.guests = guestsData;
        this.bookings = bookingsData;
        this.currentGuest = currentGuest;
        
    }
    displayFreeBookings(chosenDate) {
        let chosenDateObj = new Date(chosenDate)
        let compareDate = chosenDateObj.getDate()
 
        const openBookings = this.bookings.filter((booking) => new Date(booking.date).getDate() !== compareDate) 
        
        return openBookings
    }
    showMeRooms(openBookings) {
        const matchingRooms = openBookings.reduce((arr,booking)=> { 
            this.rooms.forEach((room) => {
            if(room.number === booking.roomNumber) {
            arr.push(room)
            }
        })

        return arr 
        
        },[])
        return matchingRooms
    }
    showAllRoomTypes() {
      const roomTypes = this.rooms.map((room) => room.roomType)
      return roomTypes
    }
    filterByRoomType(roomTypeSelected) {
       const sortedRooms = this.rooms.filter((room) => room.roomType === roomTypeSelected)
       return sortedRooms
    }

}





export default Hotel;