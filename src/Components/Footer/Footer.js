import React from 'react';
import FirstPart from './FirstPart/FirstPart';
import FourthPart from './FourthPart/FourthPart';
import SecondPart from './SecondPart/SecondPart';
import ThirdPart from './ThirdPart/ThirdPart';

const Footer = () => {
    return (
        <div style={{backgroundColor:'rgb(49,49,49)', color: 'rgb(251,251,253)', paddingTop: '80px', paddingBottom: '80px'}}>
            <div className="mx-auto w-75">
                <div className="row">
                    <div className="col-md-3">
                        <FirstPart></FirstPart>
                    </div>
                    <div className="col-md-3">
                        <SecondPart></SecondPart>
                    </div>
                    <div className="col-md-3">
                        <ThirdPart></ThirdPart>
                    </div>
                    <div className="col-md-3">
                        <FourthPart></FourthPart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;