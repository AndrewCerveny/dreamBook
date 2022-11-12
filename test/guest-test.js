import { expect } from "chai";
import guestsData from '../data/guests-sample';
import bookingsData from '../data/bookings-sample';
import roomsData from "../data/rooms-sample";
import Guest from '../src/classes/Guest';


describe('Guest', function () {
   let guest1, guest2, guest3, guest5;
   
  beforeEach(function (){
  	guest1 = new Guest (guestsData[0]);
    guest2 = new Guest (guestsData[1]);
    guest3 = new Guest (guestsData[2]);
    guest5 = new Guest (guestsData[8])
    
  });
    
  it('should be a function', function() {
     expect(Guest).to.be.a("function")
  });

  it('should have an id default to zero', function() {
    let guest4 = new Guest({id:null,name:null})
  	 expect(guest4.id).to.equal(0)
	})

  it('should take an id', function () {
      expect(guest1.id).to.equal(1)
      expect(guest2.id).to.equal(2)
  });

  it('should have a name', function () {
    expect(guest3.name).to.equal('Kelvin Schiller')
  });
   
  it('should be able to see their rooms', function (){
		expect(guest5.displayMyRooms(bookingsData)).to.deep.equal(
        [
          {
           	"id": "5fwrgu4i7k55hl6sz",
            "userID": 9,
            "date": "2022/04/22",
           "roomNumber": 15
          },
            
          {
            "id": "5fwrgu4i7k55hl6xk",
            "userID": 9,
            "date": "2022/01/31",
            "roomNumber": 11
          }
  	  	]
    )
  })
    
	it('should be able to show all money spent on rooms',function() {       
		 let myRooms = guest5.displayMyRooms(bookingsData) 
  	expect(guest5.totalSpent(myRooms,roomsData)).to.equal(501.8)
  })

  it('Should be able to sort past bookings by date', function () {
		let myRooms = guest5.displayMyRooms(bookingsData)
		let currentDate = "2022/02/22" 
		expect(guest2.showPast(currentDate, myRooms)).to.deep.equal(
		[
			{
			id: '5fwrgu4i7k55hl6xk',
			userID: 9,
			date: '2022/01/31',
			roomNumber: 11
			}
		])
		
  })
        
  it('Should be able to sort future bookings', function () {
    let myRooms = guest5.displayMyRooms(bookingsData)
    let currentDate = "2022/02/22" 
    expect(guest5.showFuture(currentDate,myRooms)).to.deep.equal(
			[
				{
				id: '5fwrgu4i7k55hl6sz',
				userID: 9,
				date: '2022/04/22',
				roomNumber: 15
				}

		])
 	})
   
})