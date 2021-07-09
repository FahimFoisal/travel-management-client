import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCardDetail.css'

const ServiceCardDetail = (service) => {
    console.log(service.service)
    return (
        <div class="card col-md-3 mx-3 px-0 cardContainer" style={{ width: "22rem" }}>
            <img src={`data:image/png;base64,${service.service.image.img}`} class="img-fluid" alt="..." />
            <div class="card-body">
                <h3 class="card-title mb-1 cardTitle textLeft">{service.service.title}</h3>
                <p class="card-text mb-1 text-muted"><small><i class="fas fa-map-marker-alt"></i> {service.service.location}</small></p>
                <p className="card-text mb-1 text-muted"><small><i class="far fa-clock"></i> {service.service.packageDuration}</small></p>
                <h6 className="mb-0" style={{color:'rgb(130,180,64)'}}><strong>{`$ ${service.service.price}`}</strong></h6>
                
            </div>
            <div class="card-footer bookBtn">
                <Link to={`/book/${service.service._id}`} className="btn btn-success linkBtn py-2">BOOK NOW</Link>
            </div>
        </div>
    );
};

export default ServiceCardDetail;