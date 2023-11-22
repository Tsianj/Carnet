import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import utilisateurService from "../services/utilisateurService";
import { toast } from 'react-toastify';

function Inscription() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [utilisateur, setUtilisateur] = useState({});
  const handleChange = (event) => {
        const {name, value} = event.currentTarget;
        setUtilisateur({...utilisateur, [name] : value})
    }
    
    const handleAdd = () => {
        try{
            const response = utilisateurService.addUtilisateur(utilisateur);
            toast.success("L'utilisateur "+ utilisateur.nom + " à bien été crée");
            setShow(false)
            
        }catch (e){
            console.log(e)
        }
        console.log(utilisateur)
    }

  return (
    <>
      <Button id='button_princ' variant="primary" onClick={handleShow}>
        Inscription
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inscription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Nom</Form.Label>
              <Form.Control value={utilisateur.nom} onChange={handleChange} name="nom"
                type="text"
                placeholder="Votre nom"
                autoFocus
              />
            </Form.Group>            
            <Form.Group className="mb-3" >
              <Form.Label>Prénom</Form.Label>
              <Form.Control value={utilisateur.prenom} onChange={handleChange} name="prenom"
                type="text"
                placeholder="Votre prénom"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Email</Form.Label>
              <Form.Control
              name='email' value={utilisateur.email} onChange={handleChange}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control name="password" value={utilisateur.password} onChange={handleChange} maxLength={10}
                type="password"
                placeholder="Votre mot de passe"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            S'inscrire
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

 
export default Inscription;