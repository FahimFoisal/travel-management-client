import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'
import '../ServicesCard/ServiceCardDetail/ServiceCardDetail.css'


const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner text-center">
                        <div class="carousel-item active ">
                            <img src={'https://images.unsplash.com/photo-1541267226650-673e4bc869c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'} class="d-block w-100 vh-100" alt="..." style={{maxWidth: '100%', filter: 'brightness(50%)'}}/>
                            <div class="carousel-caption d-none d-md-block d-flex h-75 align-items-center justify-content-center">  
                                <p className="paraTitle">YOUR NEXT ADVENTURE?</p>
                                <h1 className="display-1 headerTitle">Marina Bay, Singapore</h1>
                                <button className="linkBtn text-white">MORE INFO</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={'http://www.sonjasohn.net/wp-content/uploads/2021/01/europe.jpg'} class="d-block w-100 vh-100" alt="..." style={{filter: 'brightness(50%)'}} />
                            <div class="carousel-caption d-none d-md-block d-flex h-75 align-items-center justify-content-center">
                                <p className="paraTitle">YOUR NEXT DESTINATION?</p>
                                <h1 className="display-1 headerTitle">Beautiful Europe</h1>
                                <button className="linkBtn text-white">MORE INFO</button>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={'https://images.unsplash.com/photo-1557843961-b589ce207737?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'} class="d-block w-100 vh-100" alt="..." style={{filter: 'brightness(50%)'}}/>
                            <div class="carousel-caption d-none d-md-block d-flex h-75 align-items-center justify-content-center">
                                <p className="paraTitle">YOUR NEXT SUMMER REST?</p>
                                <h1 className="display-1 headerTitle">Cliffs Of Moher</h1>
                                <button className="linkBtn text-white">MORE INFO</button>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;