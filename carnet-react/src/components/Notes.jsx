import React from 'react';
import { useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import notesService from "../services/notesService";
import AuthContext from './AuthContext';


function Notes({fetchNotesByIdUti}) {
  const [show, setShow] = useState(false);
  const {user} = useContext(AuthContext)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [notes, setNotes] = useState({});
  const handleChange = (event) => {
    const {name, value} = event.currentTarget;
    setNotes({...notes, [name] : value})
}


const handleAdd = async () => {
    try{
      notes.id_utilisateur = user.id_utilisateur;
        const response = await notesService.addNotes(notes);
        toast.success("La note "+ notes.titre + " à bien été crée");
        setShow(false)
        fetchNotesByIdUti()
        setNotes({ titre: '', contenu: '' }); // Réinitialisation du formulaire
    }catch (e){
        console.log(e)
    }
    console.log(notes)
}


  return (
    <>

      <Button id='button_princ' variant="primary" onClick={handleShow}>
        Ajouter une note
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Titre</Form.Label>
              <Form.Control value={notes.titre} onChange={handleChange} name="titre"
                type="text"
                placeholder="Entrez votre titre"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3">
              <Form.Label>Texte</Form.Label>
              <Form.Control as="textarea" rows={5} value={notes.contenu} onChange={handleChange} name="contenu" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Notes;