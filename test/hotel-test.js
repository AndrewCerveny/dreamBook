import { expect } from "chai";
import guestsData from '../data/guests-sample';
import bookingsData from '../data/bookings-sample';
import roomsData from "../data/rooms-sample";
import Hotel from '../src/classes/Hotel';

describe('Hotel', function () {
    let hotel1,currentGuest
    
    beforeEach(function(){
        currentGuest = guestsData[8]
        hotel1 = new Hotel(roomsData, guestsData, bookingsData, currentGuest)
    })

    it('should be a function', function () {
        expect(hotel1).to.be.an.instanceOf(Hotel);
    });
    
    it('Should house all rooms', function(){
        expect(hotel1.rooms).to.deep.equal(
            [{
                "number": 1,
                "roomType": "residential suite",
                "bidet": true,
                "bedSize": "queen",
                "numBeds": 1,
                "costPerNight": 358.4
                },
                {
                    "number": 2,
                    "roomType": "suite",
                    "bidet": false,
                    "bedSize": "full",
                    "numBeds": 2,
                    "costPerNight": 477.38
                },
                {
                    "number": 3,
                    "roomType": "single room",
                    "bidet": false,
                    "bedSize": "king",
                    "numBeds": 1,
                    "costPerNight": 491.14
                },
                {
                    "number": 4,
                    "roomType": "single room",
                    "bidet": false,
                    "bedSize": "queen",
                    "numBeds": 1,
                    "costPerNight": 429.44
                },
                {
                    "number": 15,
                    "roomType": "residential suite",
                    "bidet": false,
                    "bedSize": "full",
                    "numBeds": 1,
                    "costPerNight": 294.56
                },
                {
                    "number": 11,
                    "roomType": "single room",
                    "bidet": true,
                    "bedSize": "twin",
                    "numBeds": 2,
                    "costPerNight": 207.24
                }
            ]
        )
    })
    it('Should house all the guest', function() {
        expect(hotel1.guests).to.deep.equal(
        [   
            {
                "id": 1,
                "name": "Leatha Ullrich"
            },
            {
                "id": 2,
                "name": "Rocio Schuster"
            },
            {
                "id": 3,
                "name": "Kelvin Schiller"
            },
            {
                "id": 4,
                "name": "Kennedi Emard"
            },
            {
                "id": 5,
                "name": "Rhiannon Little"
            },
            {
                "id": 6,
                "name": "Fleta Schuppe"
            },
            {
                 "id": 7,
                "name": "Dell Rath"
            },
            {
                "id": 8,
                "name": "Era Hand"                },
            {
                "id": 9,
                "name": "Faustino Quitzon"
            },
            {
                "id": 10,
                "name": "Tony Armstrong"
            }

        ])

    })
    it('Should house all bookings', function() {
        expect(hotel1.bookings).to.deep.equal(
            [
                {
                "id": "5fwrgu4i7k55hl6sz",
                "userID": 9,
                "date": "2022/04/22",
                "roomNumber": 15
                },
                {
                    "id": "5fwrgu4i7k55hl6t5",
                    "userID": 43,
                    "date": "2022/01/24",
                    "roomNumber": 24
                },
                {
                    "id": "5fwrgu4i7k55hl6t6",
                    "userID": 13,
                    "date": "2022/01/10",
                    "roomNumber": 12
                },
                {
                    "id": "5fwrgu4i7k55hl6t7",
                    "userID": 20,
                    "date": "2022/02/16",
                    "roomNumber": 7
                },
                {
                    "id": "5fwrgu4i7k55hl6xk",
                    "userID": 9,
                    "date": "2022/01/31",
                    "roomNumber": 11
                }

            ])
    })
    
    it('Should be able to hold a current guest',function() {
        expect(hotel1.currentGuest).to.deep.equal(
        {
              
            "id": 9,
             "name": "Faustino Quitzon"
        } 
        ) 
    })

    it('It should take a date and check bookings available', function () {
        expect(hotel1.displayFreeBookings("2022/04/22")).to.deep.equal
        	( [
              {
                "id": "5fwrgu4i7k55hl6t5",
                "userID": 43,
                "date": "2022/01/24",
                "roomNumber": 24
              },
              {
                  "id": "5fwrgu4i7k55hl6t6",
                  "userID": 13,
                  "date": "2022/01/10",
                "roomNumber": 12
            	},
            	{
                "id": "5fwrgu4i7k55hl6t7",
                "userID": 20,
                "date": "2022/02/16",
                "roomNumber": 7
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
		
        it('Should be able to show all room types', function(){
			expect(hotel1.showAllRoomTypes()).to.deep.equal(
			[
				'residential suite',
				'suite',
				'single room',
				'single room',
				'residential suite',
				'single room'

			]
			)
		})
		 
        it('Should take a list of available Bookings and return all Rooms available ', function(){
            
            const availableBookings = hotel1.displayFreeBookings("2022/04/22")
            expect(hotel1.showMeRooms(availableBookings)).to.deep.equal(
                
                [
                    {
                        "number": 11,
                        "roomType": "single room",
                        "bidet": true,
                        "bedSize": "twin",
                        "numBeds": 2,
                        "costPerNight": 207.24
                    }  
                ])

        })





		it('Should filter rooms by their roomTypes', function() {
			expect(hotel1.filterByRoomType('single room')).to.deep.equal(
				[
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
						number: 11,
						roomType: 'single room',
						bidet: true,
						bedSize: 'twin',
						numBeds: 2,
						costPerNight: 207.24
					}
				])
		})
	});  
