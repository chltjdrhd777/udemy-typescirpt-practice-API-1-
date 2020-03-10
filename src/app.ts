import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement; // select input and set type
const GOOGLE_API_KEY = "AIzaSyCIaAc2c5M3VpbCH6PPq_guwy9lHuowXOs"; // google gecoding API

function searchAddressHandler(event: Event) {
  event.preventDefault(); // prevent HTML from going to the default page after typing words
  const enteredAddress = addressInput.value;

  //npm install --save axios = http requestor
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        //about all address, encodeURI() allows me to change string to URI compatible string.
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);
