import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-89948.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-89948/us-central1/api' //API base URL
});

export default instance;