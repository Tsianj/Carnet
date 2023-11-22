import React, {useContext, useEffect, useState} from 'react';
import notesService from "../services/notesService";
import Notes from '../components/Notes';
import AuthContext from '../components/AuthContext';

const CarnetPage = () => {
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
    return <div className="card-container">
        {notes.map(note => {
            return <Notes key={note.id_carnet} notes={note}/>
        })}
        
    </div>;

};

export default CarnetPage;