class Guest {
 constructor(customerData) {
	this.id = customerData.id || 0;
	this.name = customerData.name;
	}
 	
	displayMyRooms(hotelBookings) {
  		let myRooms = hotelBookings.filter((hotelBooking) => hotelBooking.userID === this.id)
  		return myRooms
	}
 
 	totalSpent(myRooms,roomsData ) {
		const myTotal = myRooms.reduce((num, myRoom) => {
			roomsData.forEach((roomOffered) => {
				if(roomOffered.number === myRoom.roomNumber){
					num += roomOffered.costPerNight
				}
			})
		
		return num	
		},0)
		return myTotal
		
	}

	showPast(currentDate, myRooms) {
		let objCurDate = new Date(currentDate)
		
		const pastReserves = myRooms.filter((room) => new Date(room.date) < objCurDate)
		return pastReserves
			
			
		
	}
	showFuture(currentDate, myRooms) {
		let objCurDate = new Date(currentDate)
		
		const futureReserves = myRooms.filter((room) => new Date(room.date) > objCurDate)
		return futureReserves		

	}
}





export default Guest;
