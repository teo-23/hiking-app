import React from 'react'
import './HorizontalPhoto.css';

export default function HorizontalPhoto() {
    return (

        <div className="jumbotron jumbotron-fluid">
        <div className="container container-photo-central">
            <h2 className="display-4">photo name or sentence</h2>
            <img className="Photo-central" src="/Chile_Paine.jpg" alt="central-main-img"/>
            <p className="lead">This is a bla bla bla</p>
        </div>
        </div>
    )
}
