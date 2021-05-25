import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
  } from 'reactstrap';


const ListQuotes = ({item}) => {
    return (

        <Container className="mt-5">
            <Row>
                <Col>
                    <ul>              
                        <Card>
                            <CardImg top width="100%" src="/images/bad.png" alt="Card image cap" />
                            <CardBody>
                                <CardText tag="h3"><strong>Frase:</strong> {item.quote}</CardText>
                                <CardTitle tag="h5"><strong>Autor:</strong> {item.author}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Series: {item.series} </CardSubtitle>
                            </CardBody>
                        </Card>                 
                    </ul>
                </Col>
            </Row>
        </Container>

        
    );
       
    
}

export default ListQuotes;



   