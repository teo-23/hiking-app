import React from 'react';
import './CardPhotoLeft.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function CardPhotoLeft() {
    return (
        <>
        <Container fluid>
            <Row>
                <Col><img className="photo-left" src="/alberta.jpg" alt="landscape" /></Col>
                <Col><p className="content-left-photo">Find the best trails with one simple click</p>
                <Button variant="success" size="lg" href="/signup">
                    Sign up
                </Button>{' '}
                <Button variant="success" size="lg" href="/login">
                    Login
                </Button>
                </Col>
            </Row>
        </Container>
        {/* <div className="row align-items-center">
            <div className="col-4"><img className="photo-left" src="/alberta.jpg" alt="landscape" /></div>
            <div className="col-8 content-left-photo container">
                <p>Find the best trails with one simple click</p>
                <div className="mb-2">
                    <Button variant="success" size="lg" href="/signup">
                    Sign up
                    </Button>{' '}
                    <Button variant="success" size="lg" href="/login">
                    Login
                    </Button>
                </div>
            </div>
        </div> */}

        </>       
    )
}
