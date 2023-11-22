import React from 'react';
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

const Carnet = ({carnet}) => {
    return <>
        {/* <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Link to={"/carnet/"+carnet.id_carnet}>
                    <Card.Title>{notes.titre}</Card.Title>
                <Card.Text>{notes.contenu}
                </Card.Text>
                </Link>
            </Card.Body>
        </Card> */}
    </>;
};

export default Carnet;