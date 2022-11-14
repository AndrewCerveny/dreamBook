// Imports HERE all JS HERE

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import Guest from './classes/Guest';
import Hotel from './classes/Hotel';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/travel.jpg'
import './images/hotel.jpg'
import './images/Bed.jpg'
import './images/pastBed.jpg'
import { use } from 'chai';

// console.log('This is the JavaScript entry file - your code begins here.');


// Query Selectors 
// navbar area 
const guestPageBtn = document.querySelector('.customer-page')
const bookRmPage = document.querySelector('.book-rm-btn')
const logOut = document.querySelector('.logOut')

// Guest Page Query Selectors
const totalSpent = document.querySelector('.totalSpent')
const upComingArea = document.querySelector('.card-wrapper-container')
const pastReservedArea = document.querySelector('.pr-container')
const guestPage = document.querySelector('.guestBookingsPage')
const userNameDisplay = document.querySelector('.current-user-name')

// Book a room  Area 

const bookingPage = document.querySelector(".book-a-room-page")
const bookingDate = document.querySelector(".calendar-area")
const availableRoomSelect = document.querySelector(".available-rooms")
const roomTypeSelect = document.querySelector(".submit-room-types")
const roomsDisplay = document.querySelector('.display-rooms')



// global vars
let bookingsData;
let guestsData;
let roomsData;
let dreamBookHotel;
let pageDate;
let currentGuest;

// Api Fetching


function grabApiUrl(dataSets) {
	return fetch(`http://localhost:3001/api/v1/${dataSets}`)
		.then((response) => response.json())
		.then((data) => data)
		.catch((err) => console.log('request failed',err))
}

function getAllData(){
	return Promise.all([
		grabApiUrl('customers'),
		grabApiUrl('rooms'),
		grabApiUrl('bookings')
	])
}
console.log('HERE IS DATA',getAllData())

function assignGlobalVars() {
	getAllData().then(data => {
		guestsData = data[0].customers
		roomsData = data[1].rooms
		bookingsData = data[2].bookings
		createClasses(guestsData,roomsData,bookingsData)
	})
	
}

function onPageLoad() {
	getAllData()
	assignGlobalVars()
}

function createClasses(guestsData,roomsData,bookingsData) {
	currentGuest = new Guest(guestsData[8])
	dreamBookHotel = new Hotel(roomsData,guestsData,bookingsData,currentGuest)	
	updateGuestPage(currentGuest,dreamBookHotel)
	
}

function updateGuestPage(currentGuest,dreamBookHotel){
	const myRooms = currentGuest.displayMyRooms(dreamBookHotel.bookings)
	userNameDisplay.innerHTML = currentGuest.name
	showCurrentUsersPastBookings(myRooms,currentGuest)
	showCurrentUsersFutureBookings(myRooms,currentGuest)
}
















// event Listeners 
guestPageBtn.addEventListener('click', showDashboard)
bookRmPage.addEventListener('click', showBookingPage)
window.addEventListener('load', onPageLoad())

// Functions

function showPage(page1, page2, ) {
    page1.classList.remove('hidden')
    page2.classList.add('hidden')
    
}

function showDashboard() {
    showPage(guestPage,bookingPage)
}
function showBookingPage() {
    showPage(bookingPage,guestPage)
}


function showCurrentUsersPastBookings(myRooms,currentGuest){
	pageDate = new Date("2022/11/11")
	const pastBookings = currentGuest.showPast(pageDate,myRooms)
	pastBookings.forEach((booking)=> {
		pastReservedArea.innerHTML += 
		` <section class="single-cards">
        <div class="card-borders">
        <div class="image-fit">
          <img src="./images/pastBed.jpg" alt="roomType" class="bed-pic">
        </div>
          <h3> Booking Id </h3>
            <p> ${booking.id} </p>
          <h3> Date </h3>
            <p> ${booking.date} </p>
        </div>
       </section>`
	})
	
	
}

function showCurrentUsersFutureBookings(myRooms,currentGuest) {
	pageDate = new Date("2022/11/11")
	
		const futureBookings = currentGuest.showFuture(pageDate, myRooms)
			futureBookings.forEach((booking)=> { 
				upComingArea.innerHTML += ` 
		<section class="single-cards"> 
    	<div class="card-borders"> 
      <div class="image-fit">
        <img src="./images/Bed.jpg" alt="roomType" class="bed-pic">
      </div>
      	<h3> Booking Id </h3>
          <p> ${booking.id} </p>
        <h3 > Date </h3>
        	<p> ${booking.date}</p> 
      </div>
    </section>`
	})
}