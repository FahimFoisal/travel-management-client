import React from 'react';
import './FirstPart.css'

const FirstPart = () => {
    return (
        <div className="firstPart">
            <h4 style={{color: 'yellowgreen'}}>Contact Information</h4>
            <div>
                <p className="footer-font">We would be more than happy to help you. Our team advisor are 24/7 at your service to help you.</p>
                <div className="border-top border-bottom border-secondary">
                    <p className=" mt-3" style={{fontSize: '13px'}}><i class="fa fa-envelope" aria-hidden="true"></i> info@flyingbird.com.bd</p>
                </div>
                <div className="border-bottom mt-3 border-secondary">
                    <p className="footer-font"><i class="fas fa-phone-square-alt"></i> +8801911986457</p>
                    <p className="footer-font"><i class="fas fa-phone-square-alt"></i> +8801911986457</p>
                    <p className="footer-font"><i class="fas fa-phone-square-alt"></i> +8801911986457</p>
                </div>
                <div className="mt-3">
                    <p className="footer-font"><i class="fas fa-map-marker-alt"></i> Mirpur-12, Dhaka - 1216, BD</p>
                </div>
            </div>
        </div>
    );
};

export default FirstPart;