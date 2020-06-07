import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer d-flex flex-column">
            <footer className="page-footer font-small text-success">

            <div className="footer-copyright text-center py-3">&copy; 2020 :
                <a className="footer-link" target="_blank" href="https://github.com/MichielSnoek"> MichielSnoek</a> &
                <a className="footer-link" target="_blank" href="https://github.com/teo-23"> teo-23</a>
            </div>

            </footer>
        </div>
    )
}
