import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import AuthContext from "./AuthContext";
import { toast } from "react-toastify";
import utilisateurService from "../services/utilisateurService";
import Auth from "../services/Auth";

function Connexion() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { setUser, setIsAuthenticated } = useContext(AuthContext);
  const [utilisateur, setUtilisateur] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setUtilisateur({ ...utilisateur, [name]: value });
  };

  const handleConn = async () => {
    try {
      const response = await utilisateurService.loginUtilisateur(utilisateur);
      console.log(response);
      toast.success(
        "Bonjour " +
          response.data.prenom +
          ", vous êtes est connecté"
      );
      setShow(false);
      setUser(response.data);
      setIsAuthenticated(true);
      Auth.setUser(JSON.stringify(response.data));
    } catch (e) {
      console.log(e);
    }
    console.log(utilisateur);
  };

  return (
    <>
      <Button id="button_princ" variant="primary" onClick={handleShow}>
        Connexion
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connexion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={utilisateur.email}
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                name="password"
                value={utilisateur.password}
                onChange={handleChange}
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
          <Button variant="primary" onClick={handleConn}>
            Connexion
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Connexion;
