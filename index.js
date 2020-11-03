'use strict';

function getDogImage(breed) {

  // URL for random image from a breed collection
  // https://dog.ceo/api/breed/hound/images/random

  let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

  fetch(url)
    .then(response => {
      if (response.status == 404) {
        throw error();
      }
      return response.json()})
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => displayError());
}


function displayError() {
  // replace the results with the error

  // Example from jQuery:
  // $( "div.second" ).replaceWith( "<h2>New heading</h2>" );
  $('.results').html( '<p>Breed not found. Try another breed.</p>' );
  // display the results section
  $('.results').removeClass('hidden');
  $('h2').addClass('hidden');
}


function displayResults(responseJson) {
  console.log(responseJson);
  // replace the existing image with the new one
  $('.results').html(
    `<img src="${responseJson.message}">`
  )
  // display the results section
  $('.results').removeClass('hidden');
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let breed = $( "#breed" ).val();
    console.log(breed);
    getDogImage(breed);
  });
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});