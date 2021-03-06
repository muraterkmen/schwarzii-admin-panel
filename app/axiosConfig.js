// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
// Set config defaults when creating the instance

const instance = axios.create({
    baseURL: "https://us-central1-socialape-4aae3.cloudfunctions.net/api"
  });
  
  
export default instance;