import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Navbar from '../Home/Navbar/Navbar';
import ServiceSidebar from '../Home/Services/ServiceSidebar/ServiceSidebar';

const BookingList = () => {
    const [mybookingList, setMybookingList] = useState([]);
    const [loggedInUser,setLoggedIn] = useContext(userContext);
    useEffect(()=> {
        fetch('https://floating-forest-16007.herokuapp.com/orderedD/?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setMybookingList(data))
    },[]);
    return (
        <div>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-2">
                    <ServiceSidebar></ServiceSidebar>
                </div>
                <div className="col-md-10 mx-auto w-50 my-5" style={{backgroundColor: 'rgb(247,247,249)'}}>
                    <div className="row mx-auto w-75">
                    <h4 className="mt-5" style={{fontFamily: `${"'Cabin', sans-serif"}`}}>My Order</h4>
                    {
                        mybookingList.map(order => {
                            return <div className="col-md-12 pt-2 pb-5">
                            <div class="card shadow">
                                <div class="card-body" style={{borderBottom: 'none', backgroundColor: 'white', fontFamily:`${"'Cabin', sans-serif"}`}}>
                                    <div className="d-flex">
                                        <h4 class="card-title mb-1"><i class="fas fa-user"></i> {order.name}</h4>
                                        <p className="card-text ms-auto"><span class={'badge rounded-pill bg-'+`${order.class}`}>Order {order.status}</span></p>
                                    </div>
                                    <p class="card-text mb-0" style={{color: 'rgb(128,128,128)'}}><i class="fas fa-money-check-alt"></i> Payment With : {order.PaymentInfo.card.brand} card</p>
                                    <p class="card-text mb-0" style={{color: 'rgb(140,180,64)'}}><i class="fas fa-info-circle"></i> {order.orderedService}</p>
                                    
                                </div>
                            </div>
                        </div>
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;