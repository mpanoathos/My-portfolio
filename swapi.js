// // async function getCharacters() {
// //   let characters = []; // Create an empty array to store the characters
// //   let nextUrl = 'https://swapi.dev/api/people'; // Set the URL for the first page of results
// //   while (nextUrl) {
// //     // Make a request to the API
// //     const response = await fetch(nextUrl);
// //     const data = await response.json();
// //     // Add the characters from the current page to the array
// //     characters = characters.concat(data.results);
// //     // Set the URL for the next page of results, or null if there are no more pages
// //     nextUrl = data.next ? data.next : null;
// //   }
// //   // Build an HTML string for the list of characters
// //   let html = '<ul>';
// //   characters.forEach(character => {
// //     html += `<li>${character.name}</li>`;
// //   });
// //   html += '</ul>';
// //   // Insert the HTML string into the div element
// //   document.getElementById('text').innerHTML = html;
// // }

// // getCharacters(); // Call the function to retrieve all characters

// // app.js

// async function getCharacters() {
//   let characters = []; // Create an empty array to store the characters
//   let nextUrl = 'https://swapi.dev/api/people'; // Set the URL for the first page of results
//   while (nextUrl) {
//     // Make a request to the API
//     const response = await fetch(nextUrl);
//     const data = await response.json();
//     // Add the characters from the current page to the array
//     characters = characters.concat(data.results);
//     // Set the URL for the next page of results, or null if there are no more pages
//     nextUrl = data.next ? data.next : null;
//   }
//   // Build an HTML string for the list of characters
//   let html = '<ul>';
//   characters.forEach(character => {
//     html += `<li><a href="#" data-url="${character.url}" class="character-link">${character.name}</a></li>`;
//   });
//   html += '</ul>';
//   // Insert the HTML string into the div element
//   document.getElementById('characters').innerHTML = html;
// }

// getCharacters(); // Call the function to retrieve all characters

// // Function to display character details in the modal
// async function showCharacter(url) {
//   // Make a request to the API to get the character details
//   const response = await fetch(url);
//   const character = await response.json();
//   // Update the modal content with the character details
//   document.getElementById('modal-character-name').textContent = character.name;
//   document.getElementById('modal-character-height').textContent = `Height: ${character.height}`;
//   document.getElementById('modal-character-mass').textContent = `Mass: ${character.mass}`;
//   document.getElementById('modal-character-hair-color').textContent = `Hair color: ${character.hair_color}`;
//   document.getElementById('modal-character-skin-color').textContent = `Skin color: ${character.skin_color}`;
//   document.getElementById('modal-character-eye-color').textContent = `Eye color: ${character.eye_color}`;
//   document.getElementById('modal-character-birth-year').textContent = `Birth year: ${character.birth_year}`;
//   document.getElementById('modal-character-gender').textContent = `Gender: ${character.gender}`;
//   // Show the modal
//   document.getElementById('modal').style.display = 'block';
// }

// // Add event listeners for the character links
// const characterLinks = document.querySelectorAll('.character-link');
// characterLinks.forEach(link => {
//   link.addEventListener('click', event)
//   // app.js (continued)

// // ...

// characterLinks.forEach(link => {
//   link.addEventListener('click', event => {
//     event.preventDefault(); // Prevent the default link behavior
//     const url = event.target.dataset.url; // Get the character URL from the data attribute
//     showCharacter(url); // Show the character details in the modal
//   });
// });

// // Add an event listener for the modal close button
// document.querySelector('.modal-close').addEventListener('click', () => {
//   document.getElementById('modal').style.display = 'none'; // Hide the modal
// });

// // Add an event listener for the window to close the modal when the user clicks outside of it
// window.addEventListener('click', event => {
//   if (event.target === document.getElementById('modal')) {
//     document.getElementById('modal').style.display = 'none';
//   }
// });
// })

// Get the character list and character info elements
const characterList = document.getElementById('character-list');
const characterInfo = document.getElementById('character-info');

// Get the data for the characters
const characters = [
  {
    name: 'Luke Skywalker',
    description: 'A young man with great potential, Luke Skywalker becomes a Jedi Knight and helps defeat the Empire.'
  },
  {
    name: 'Leia Organa',
    description: 'A strong-willed princess and leader in the fight against the Empire, Leia Organa is a key player in the Rebel Alliance.'
  },
  // More characters go here
];

// Create a list item for each character
characters.forEach(character => {
  const listItem = document.createElement('li');
  listItem.textContent = character.name;
  
  // Add a click listener to the list item
  listItem.addEventListener('click', () => {
    // Display the character's information when the list item is clicked
    characterInfo.textContent = character.description;
  });
  
  // Add the list item to the character list
  characterList.appendChild(listItem);
});