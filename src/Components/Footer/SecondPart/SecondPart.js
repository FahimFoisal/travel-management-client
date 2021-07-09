import React from 'react';
import '../FirstPart/FirstPart.css';
import './SecondPart.css'

const SecondPart = () => {
    return (
        <div className="secondPart">
            <h4 style={{color: 'yellowgreen'}}>Recent News</h4>
            <div className="footer-second">
                <p className="footer-font mt-3">The towns where travellers lose track of time</p>
                <p className="footer-font text-muted">June 05-2021</p>
                <div className="border-top border-bottom border-secondary">
                    <p className="footer-font mt-3">Mother City markets: where to shop ’til you drop in Cape Town</p>
                    <p className="footer-font text-muted">May 05-2021</p>
                </div>
                <div className="mt-3">
                    <p className="footer-font">10 dos and don’ts for social media-savvy travelers</p>
                    <p className="footer-font text-muted">January 05-2021</p>
                </div>
            </div>
        </div>
    );
};

export default SecondPart;