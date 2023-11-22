import axios from 'axios';


function fetchCarnet() {
    return axios.get("http://127.0.0.1:3000/carnet");
    
}

export default {
    fetchCarnet
}