import React, { useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import ServiceSidebar from '../Home/Services/ServiceSidebar/ServiceSidebar';
import '../Home/Services/AddService/AddService.css'
const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});
    const handleBlur = e => {
        const newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://floating-forest-16007.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
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
                    <div className="containerSection mt-5 py-5 w-50 mx-auto">
                        <form onSubmit={handleSubmit} className="w-75 mx-auto">
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="formLabel">Email</label>
                                <input onBlur={handleBlur} type="text" className="form-control inputForm" name="adminEmail" placeholder="Enter Email" />
                            </div>
                            <button type="submit" className="btn btn-primary py-2 mt-3 linkBtn">CREATE ADMIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;