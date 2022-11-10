class Guest {
	constructor(guestData) {
		this.id = guestData.id || 0 ;
		this.name = guestData.name;
		this.futureBookings = [];
		this.pastBookings = [];
		
	} 
	displayMyRooms(hotelBookings) {
		const myRooms = hotelBookings.filter((hotelBooking) => hotelBooking.userID === this.id)
		return myRooms
	}
	totalSpent(myRooms, roomsData) {
		const myTotal = myRooms.reduce((num, myRoom) => {
			roomsData.forEach((roomOff) => {
				if(roomOff.number === myRoom.roomNumber) {
					num += roomOff.costPerNight
				}
			})
			return num
		}, 0)
		return myTotal.toFixed(2)

	}
};





export default Guest;
