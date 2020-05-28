import React from 'react';
import './CardPhotoRight.css';


export default function CardPhotoRight() {
    return (
        <div>
        <div className="row align-items-center">
            <div className="col-8 content-right-photo">
                <p>Note that the development build is not optimized.
                To create a production build, use npm run build.
                </p>
            </div>
            <div className="col-4"><img className="Photo-right" src="/logo512.png" alt="nightmare" /></div>
        </div>
                
        </div>
    )
}
