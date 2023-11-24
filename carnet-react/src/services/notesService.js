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
function deleteNoteById(noteId) {
    return axios.delete(`http://127.0.0.1:3000/notes/${noteId}`);
  }
function modifyNoteById(noteId, notes) {
    return axios.patch(`http://127.0.0.1:3000/notes/${noteId}`, notes);
  }
export default {
    fetchNotes,
    addNotes,
    fetchNotesByIdUti,
    deleteNoteById,
    modifyNoteById
}