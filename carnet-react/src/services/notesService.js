import axios from 'axios';

function fetchNotes() {
    return axios.get("http://127.0.0.1:3000/notes");
    
}
function addNotes(notes){
    return axios.post("http://127.0.0.1:3000/notes", notes, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export default {
    fetchNotes,
    addNotes
}