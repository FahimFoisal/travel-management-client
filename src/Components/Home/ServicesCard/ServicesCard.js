import React, { useEffect, useState } from 'react';
import ServiceCardDetail from './ServiceCardDetail/ServiceCardDetail';
import '../ServicesCard/ServiceCardDetail/ServiceCardDetail.css'

const ServicesCard = () => {
    const [serviceCardInfo, setServiceCardInfo] = useState([]);
    useEffect( () => {
        fetch('https://floating-forest-16007.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServiceCardInfo(data))
    }, [])
    return (
        <div className="row justify-content-center" style={{backgroundColor: 'rgb(247,247,249)', paddingBottom: '90px'}}>
            <strong id="service-title">Our Services</strong>
            {
                serviceCardInfo.map(service => <ServiceCardDetail service={service}></ServiceCardDetail>)
            }
        </div>
    );
};
export default ServicesCard;