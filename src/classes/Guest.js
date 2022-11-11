class Guest {
 constructor(customerData) {
	this.id = customerData.id || 0;
	this.name = customerData.name;
	this.futureBookings = [];
	this.pastBookings = [];
	
	
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

	sortBookings(currentDate, myRooms) {
		
		myRooms.forEach((roomBooked) => {
			
			if(roomBooked.date < currentDate) {
				this.pastBookings.push(roomBooked)
 			} else {
				this.futureBookings.push(roomBooked)
			}
			console.log('did this work',this.pastBookings)
			console.log('the other side', this.futureBookings)
		})
	}
}





export default Guest;
