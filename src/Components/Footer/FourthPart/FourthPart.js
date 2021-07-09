import React from 'react';
import './FourthPart.css'

const FourthPart = () => {
    return (
        <div className="FourthPart">
            <h4 style={{color: 'yellowgreen'}}>Mailing List</h4>
            <p className="footer-font">Enter your email address for our mailing list to keep yourself updated.</p>
            <div className="d-flex">
                <input className="form-control" type="email" name="email" id="footer-email" placeholder="Email Address" />
                <button className="btn btn-success btn-color" type="submit">DONE</button>
            </div>
            <div className="mt-3">
                <p className="footer-font">Follow us on social media :</p>
                <h3 style={{color: 'yellowgreen'}}><i class="fab fa-instagram me-2"></i><i class="fab fa-facebook me-2"></i><i class="fab fa-twitter-square me-2"></i></h3>
            </div>
        </div>
    );
};

export default FourthPart;