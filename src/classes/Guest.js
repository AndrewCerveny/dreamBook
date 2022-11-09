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
};





export default Guest;
