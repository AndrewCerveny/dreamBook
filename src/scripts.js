// Imports HERE all JS HERE

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

import guestData from '../data/guest-sample';
import bookingData from '../data/booking-sample';
import Guest from '../src/classes/Guest';
import roomsData from "../data/rooms-sample";
import Hotel from "../src/classes/Hotel"




window.addEventListener('load', createDashboard)

function createDashboard() {
   const myHotel = new Hotel(roomsData,guestData,bookingData)
   return myHotel
}