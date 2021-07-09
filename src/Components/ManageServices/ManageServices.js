import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import ServiceSidebar from '../Home/Services/ServiceSidebar/ServiceSidebar';
import '../Home/Services/AddService/AddService.css';
import './ManageServices.css'

const ManageServices = () => {
    const [serviceList, setServiceList] = useState([]);
    useEffect(() => {
        fetch('https://floating-forest-16007.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, [])
    const handleDelete = (id) => {
        fetch(`https://floating-forest-16007.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    document.getElementById(`${id}`).style.display = 'none';
                }
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-2">
                    <ServiceSidebar></ServiceSidebar>
                </div>
                <div className="col-md-10">
                    <div className="w-75 mx-auto mt-5 py-5 containerSection" style={{fontFamily: `${"'Cabin', San Serif"}`}}>
                        <h4 className="ps-5 ms-5">Manage Service</h4>
                            <table class="w-75 mx-auto table table-hover">
                                <thead>
                                    <tr>
                                        <th>Package Name</th>
                                        <th>Price</th>
                                        <th style={{paddingLeft: '32px'}}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (serviceList.length === 0) && <div class="spinner-border justify-content-center" style={{ position: 'relative', left: '350px', top: '180px', color: 'rgb(140,180,64)' }} role="status"><span class="visually-hidden">Loading...</span></div>
                                    }
                                    {
                                        serviceList.map(serviceDetail => <tr id={`${serviceDetail._id}`}><td><strong>{serviceDetail.title}</strong></td><td className="gx-5"><strong>${serviceDetail.price}</strong></td><td><button className="btn btn-danger linkBtn py-2" onClick={() => handleDelete(`${serviceDetail._id}`)}>DELETE</button></td></tr>)
                                    }
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageServices;