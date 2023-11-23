import axios from 'axios';

function fetchNotes() {
    return axios.get("http://127.0.0.1:3000/notes");
    
}
function fetchNotesByIdUti(user) {
    return axios.get("http://127.0.0.1:3000/notes/ "+ user);
    
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
    addNotes,
    fetchNotesByIdUti
}