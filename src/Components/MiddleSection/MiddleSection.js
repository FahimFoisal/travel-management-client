import React from 'react';
import handshake from '../../Photos/handshake.png';
import insurance from '../../Photos/insurance.png';
import serviceImg from '../../Photos/24-hours-support.png';

const MiddleSection = () => {
    return (
        <div style={{margin: '70px 0px 30px 0px'}}>
            <h2 className="text-center" style={{fontSize: '48px', fontWeight: 600}}>Prepare For Your Travel</h2>
            <p className=" text-center text-muted">Prepare to spend the most amazing time out</p>
            <div className="row w-75 mx-auto" style={{margin: '50px 0px'}}>
                <div className="col-md-4">
                    <div class="card" style={{width: '22rem', border: 'none'}}>
                        {/* <i class="fas fa-satellite" style={{fontSize: '200px', color: 'rgb(140,180,64)'}}></i> */}
                        <img src={handshake} className='mx-auto d-block mb-3' style={{width: '100px'}}/>
                        <div class="card-body">
                            <h5 class="card-title text-center" style={{fontSize: '20px', fontWeight: 600}}>Reliable Booking System</h5>
                            <p class="card-text text-center text-muted" style={{fontSize: '14px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" style={{width: '22rem', border: 'none'}}>
                        <img src={insurance} className='mx-auto d-block mb-3' style={{width: '100px'}}/>
                        <div class="card-body">
                            <h5 class="card-title text-center" style={{fontSize: '20px', fontWeight: 600}}>Get Travel Insurance</h5>
                            <p class="card-text text-center text-muted" style={{fontSize: '14px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card" style={{width: '22rem', border: 'none'}}>
                        <img src={serviceImg} className='mx-auto d-block mb-3' style={{width: '100px'}}/>
                        <div class="card-body">
                            <h5 class="card-title text-center " style={{fontSize: '20px', fontWeight: 600}}>World Class Service</h5>
                            <p class="card-text text-center text-muted" style={{fontSize: '14px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MiddleSection;