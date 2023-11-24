import React, {useContext, useEffect, useState} from 'react';
import notesService from "../services/notesService";
import Notes from '../components/Notes';
import AuthContext from '../components/AuthContext';
import NotesAffichage from '../components/NotesAffichage';

const NotesPage = () => {
    const [notes, setNotes] = useState([]);
    const {user} = useContext(AuthContext);

    const fetchNotesByIdUti = async () => {
        try {
            const response = await notesService.fetchNotesByIdUti(user.id_utilisateur);
            setNotes(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchNotesByIdUti()
    }, []);


    console.log(user);
    return <main className='position-notes'>
        <div className="card-container">
        <Notes fetchNotesByIdUti={fetchNotesByIdUti}/>
        </div>
        <div className="notes-container">
            {notes.map(n => {
            return <NotesAffichage key={notes.id_notes} notes={n} fetchNotes={fetchNotesByIdUti}/>})}
        </div>
    </main>;

};

export default NotesPage;