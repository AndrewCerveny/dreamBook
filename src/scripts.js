// Imports HERE all JS HERE

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/travel.jpg'
import './images/hotel.jpg'
import './images/Bed.jpg'
import './images/pastBed.jpg'

// console.log('This is the JavaScript entry file - your code begins here.');


// Query Selectors 
// navbar area 
const guestPageBtn = document.querySelector('.customer-page')
const bookRmPage = document.querySelector('.book-a-room')
const logOut = document.querySelector('.logOut')
// Guest Page Query Selectors
const totalSpent = document.querySelector('.totalSpent')
const upComingArea = document.querySelector('.card-wrapper-container')
const pastReservedArea = document.querySelector('.pr-container')
const wholeGuestPage = document.querySelector('.guestBookingsPage')


// global vars

// Api Fetching

// event Listeners 
guestPageBtn.addEventListener('click', showDashboard)
bookRmPage.addEventListener('click', showBookingPage)
logOut.addEventListener('click', showLogOut)
// Functions

function showPage(page1, page2, page3) {
    page1.classList.remove(".hidden")
    page2.classList.add('.hidden')
    page3.classList.add('hidden')

}

function showDashboard() {
    showPage(wholeGuestPage)
}
function showBookingPage() {
    showPage()
}