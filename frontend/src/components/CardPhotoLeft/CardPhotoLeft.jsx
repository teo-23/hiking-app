import React from 'react';
import './CardPhotoLeft.css';
import Button from 'react-bootstrap/Button';

export default function CardPhotoLeft() {
    return (
        <div>
        <div className="row align-items-center">
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
        </div>
                
        </div>
    )
}
