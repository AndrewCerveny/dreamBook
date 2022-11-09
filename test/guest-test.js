import { expect } from "chai";
import guestData from '../data/guest-sample';
import bookingData from '../data/booking-sample';
import Guest from '../src/classes/Guest';


describe('Guest', function () {
   let guest1, guest2, guest3, guest5;
   beforeEach(function (){
    guest1 = new Guest (guestData[0]);
    guest2 = new Guest (guestData[1]);
    guest3 = new Guest (guestData[2]);
    guest5 = new Guest (guestData[8])
    
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

    expect(guest5.displayMyRooms(bookingData)).to.deep.equal(
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
   
	it('Should be able to store future bookings', function(){
		expect(guest2.futureBookings).to.deep.equal([])
	 })
	 
	 it('Should be able to store past bookings', function() {
		expect(guest3.pastBookings).to.deep.equal([])
	 })

        
    
        
})