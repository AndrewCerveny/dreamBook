import { expect } from "chai";
import guestData from '../data/guest-sample';
import Guest from '../src/classes/Guest';

describe('Guest', function () {
   let guest1, guest2, guest3;
   beforeEach(function (){
    guest1 = new Guest (guestData[0]);
    guest2 = new Guest (guestData[1]);
    guest3 = new Guest (guestData[2]);
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
})

