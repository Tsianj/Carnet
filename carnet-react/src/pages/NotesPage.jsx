import React, {useContext, useEffect, useState} from 'react';
import notesService from "../services/notesService";
import Notes from '../components/Notes';
import AuthContext from '../components/AuthContext';

const NotesPage = () => {
    const [notes, setNotes] = useState([]);
    const {user} = useContext(AuthContext);

    const fetchNotes = async () => {
        try {
            const response = await notesService.fetchNotes();
            setNotes(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchNotes()
    }, []);


    console.log(user);
    return <main>
        <div className="card-container">
        <Notes />
        </div>
    </main>;

};

export default NotesPage;