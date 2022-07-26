import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardUser(props) {
    const handleClick = () => {
        props.handleName(props.user)
    }

    return (
        <div style={{ marginLeft: 20 }}>
            <Card border="warning" style={{ width: '20rem' }}>
                <Card.Img variant='bottom' src={props.user.image} />
                <Card.Body>
                    <Card.Title>
                        <h1> {props.user.name}</h1>
                    </Card.Title>
                    <Card.Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                        {props.user.email}
                    </Card.Text>
                    <Button variant="primary" onClick={handleClick}> Show User's Name</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardUser