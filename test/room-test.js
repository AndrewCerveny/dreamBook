import { expect } from "chai";
import roomsData from '../data/rooms-sample';
import Room from '../src/classes/Room';

describe('Rooms', function () {
    let room1, room2, room3;
    
    beforeEach(function() {
        room1 = new Room(roomsData[0])
        room2 = new Room(roomsData[1])
        room3 = new Room(roomsData[2])
    })

    it ('Should be a function', function () {
        expect(Room).to.a("function");
    });

   it('Should have a room Number',function(){
    expect(room1.number).to.equal(1)
   })

   it('should have a roomType',function(){
       expect(room2.roomType).to.equal("suite")
   })

   it('should have a bidet option', function() {
    expect(room2.hasBidet).to.equal(false)
   })

   it('Should show if a room had a bidet', function(){
    expect(room1.hasBidet).to.equal(true)
   })

   it('Should have a bedSize', function(){
    expect(room3.bedSize).to.equal('king')
   })

   it('Should show amount of beds', function(){
    expect(room2.numOfBeds).to.equal(2)
   })
   
   it('Should show a costPerNight', function() {
    expect(room1.nightlyCharge).to.equal(358.4)
   })
   it('should filter rooms that have a bidet',function() {
     expect(room1.filterBidets(roomsData)).to.deep.equal(
        [
            {
                number: 1,
                roomType: 'residential suite',
                bidet: true,
                bedSize: 'queen',
                numBeds: 1,
                costPerNight: 358.4 
            },
            {
                number: 11,
                roomType: 'single room',
                bidet: true,
                bedSize: 'twin',
                numBeds: 2,
                costPerNight: 207.24
            }
        ]
     )
   }) 
   it ('Should filter by roomType', function(){
       expect(room2.filterByRoom('residential suite',roomsData)).to.deep.equal(
        [
            {
            number: 1,
            roomType: 'residential suite',
            bidet: true,
            bedSize: 'queen',
            numBeds: 1,
            costPerNight: 358.4

            },
            {
                number: 15,
                roomType: 'residential suite',
                bidet: false,
                bedSize: 'full',
                numBeds: 1,
                costPerNight: 294.56 
            }
        ])
   })

   it('Should filter by number of beds', function(){
    expect(room2.filterByBeds(1,roomsData)).to.deep.equal(
        [
            {
                number: 1,
                roomType: 'residential suite',
                bidet: true,
                bedSize: 'queen',
                numBeds: 1,
                costPerNight: 358.4
            },

            {
                number: 3,
                roomType: 'single room',
                bidet: false,
                bedSize: 'king',
                numBeds: 1,
                costPerNight: 491.14
            },

            {
                number: 4,
                roomType: 'single room',
                bidet: false,
                bedSize: 'queen',
                numBeds: 1,
                costPerNight: 429.44
            },
            {
                number: 15,
                roomType: 'residential suite',
                bidet: false,
                bedSize: 'full',
                numBeds: 1,
                costPerNight: 294.56
            }

        ]
    )
   })
   

});