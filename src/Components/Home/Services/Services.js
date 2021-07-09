import React from 'react';
import ServiceSidebar from './ServiceSidebar/ServiceSidebar';
import OrderList from '../../OrderList/OrderList';
import Navbar from '../Navbar/Navbar';

const Services = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-2">
                    <ServiceSidebar></ServiceSidebar>
                </div>
                <div className="col-md-10">
                    <OrderList></OrderList>
                </div>
            </div>
        </div>
    );
};

export default Services;