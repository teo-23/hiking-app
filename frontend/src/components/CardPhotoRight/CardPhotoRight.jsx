import React from 'react';
import './CardPhotoRight.css';


export default function CardPhotoRight() {
    return (
        <div>

        <div className="row align-items-center">
            <div className="col-6 content-right-photo container">
                <p>Save, create, and share your favorite trails</p>
                <p className="quote">“I took the one less traveled by, <br></br>
                And that has made all the difference.” <br></br>
                <span className="span-quote"> – Robert Frost</span></p>
            </div>
            <div className="col-6"><img className="photo-right" src="/alberta.jpg" alt="landscape" /></div>
        </div>
                
        </div>
    )
}
