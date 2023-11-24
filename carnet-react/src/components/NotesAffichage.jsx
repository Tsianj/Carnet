import React, {  useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { FaPencilAlt, FaTrash } from 'react-icons/fa'; // Importer les icônes de Font Awesome (ici, les icônes crayon et poubelle)
import notesService from '../services/notesService';


const NotesAffichage = ({notes, fetchNotes}) => {
    const [divColor, setDivColor] = useState("#ffa");
    const [noteId, setNoteId] = useState();

    const changeColor = (newColor) => {
      setDivColor(newColor);
    };
  
    const [hovered, setHovered] = useState(false); // État pour gérer le survol

    const handleMouseEnter = () => {
        setHovered(true); // Définir hovered à true au survol de la carte
    };

    const handleMouseLeave = () => {
        setHovered(false); // Définir hovered à false lorsque la souris quitte la carte
    };
    const handleDelete = async () => {
        try {
          await notesService.deleteNoteById(noteId);
          fetchNotes(); // Actualiser les notes après la suppression
        } catch (error) {
          console.error('Erreur lors de la suppression de la note : ', error);
        }
      };
    return (<>

        <Card
        className="postit"
        style={{ width: "18rem", backgroundColor: divColor }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Card.Body>
          <Card.Title>{notes.titre}</Card.Title>
          <Card.Text>{notes.contenu}</Card.Text>
        </Card.Body>
                <div className="card-buttons mt-auto text-right">
          {/* Condition pour afficher les boutons */}
          {hovered && (
            <>
              <div className="colors_button">
                <button
                  className="postit_vert"
                  onClick={() => changeColor("lightgreen")}
                ></button>
                <button
                  className="postit_corail"
                  onClick={() => changeColor("lightcoral")}
                ></button>
                <button
                  className="postit_bleu"
                  onClick={() => changeColor("lightsteelblue")}
                ></button>
                <button
                  className="postit_jaune"
                  onClick={() => changeColor("#ffa")}
                ></button>
              </div>
          {/* Bouton avec icône crayon */}
              <Button
                variant="link"
                className="text-dark p-0 opacity-70"
                title="Modifier"
                aria-label="Modifier"
              >
                <FaPencilAlt size={20} style={{ color: "black" }} />
              </Button>
              {/* Bouton avec icône poubelle */}
              <Button
                variant="link"
                className="text-dark p-0 opacity-70"
                title="Supprimer"
                aria-label="Supprimer"
                onClick={handleDelete}
              >
                <FaTrash size={20} style={{ color: "black" }} />
              </Button>
            </>
          )}
        </div>
      </Card>
      </>);
};


export default NotesAffichage;