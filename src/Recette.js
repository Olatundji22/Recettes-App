import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Recette.css'
import { Card } from 'react-bootstrap';

function Recette({titre, calorie, image, ingredients}) {
    return (
        <div className='col-md-6 dive' style={{display: 'inline-flex'}}>
            <Card className="mb-3" style={{ width: '30rem' }}>
                <Card.Img variant="top" src={image} className='img' />
                <Card.Body>
                    <Card.Title>{titre}</Card.Title>
                    <Card.Text>
                        <ol>
                            {ingredients.map(ingredients =>(
                            <li>
                                {ingredients.text}
                            </li>
                            ))}
                        </ol>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Recette
