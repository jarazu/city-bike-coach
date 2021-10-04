import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import "./Service.css"

const Service = (props) => {
    const{title, desc, img} = props.service;
    return (
        <Col>
            <Card style={{ width: '18rem' }} className="custom-card">
                <Card.Title className="title">{title}</Card.Title>
                {/* <Card.Img src={img} className="img"/> */}
                <Image src={img}  className="img"/>
                <Card.Body>
                    <Card.Text className="card-text">
                        {desc}
                    </Card.Text>
                    <Button variant="outline-primary more-info">Read More</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;