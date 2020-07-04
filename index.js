// Import stylesheets
import './style.css';
import axios from 'axios';
axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    //console.log(response.data);
    let testObject=response.data;
    localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));
  })
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;