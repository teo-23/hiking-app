import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

export default function Footer() {
    return (
        <div>
            <footer className="page-footer font-small text-info">

            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a className="footer-link" target="_blank" href="https://github.com/MichielSnoek"> MichielSnoek</a> &
                <a className="footer-link" target="_blank" href="https://github.com/teo-23"> teo-23</a>
            </div>

            </footer>
        </div>
    )
}
