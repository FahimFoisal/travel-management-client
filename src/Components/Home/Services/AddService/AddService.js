import React, { useContext, useState } from 'react';
import { userContext } from '../../../../App';
import Navbar from '../../Navbar/Navbar';
import ServiceSidebar from '../ServiceSidebar/ServiceSidebar';
import './AddService.css'

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    console.log(info)

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('location', info.location);
        formData.append('packageDuration', info.packageDuration);
        formData.append('price', info.price);

        fetch('https://floating-forest-16007.herokuapp.com/addService', {
            method: 'POST',
            body: formData
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
                    <div className="containerSection py-5 w-50 mx-auto mt-5" >
                        <form onSubmit={handleSubmit} className="w-75 mx-auto">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="formLabel">Service Title</label>
                                <input onBlur={handleBlur} type="text" className="form-control inputForm" name="title" placeholder="Add Title" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea3" className="formLabel">Location</label>
                                <input onBlur={handleBlur} type="text" class="form-control inputForm" name="location" id="exampleFormControlTextarea3" placeholder="Location"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea3" className="formLabel">Package Duration</label>
                                <input onBlur={handleBlur} type="text" class="form-control inputForm" name="packageDuration" id="exampleFormControlTextarea3" placeholder="Ex. 2 days- 1 night"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="formLabel">Price</label>
                                <input onBlur={handleBlur} type="number" className="form-control inputForm" name="price" id="exampleInputPassword1" placeholder="Price" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="formLabel">Upload a image</label>
                                <input onChange={handleFileChange} type="file" className="form-control inputFile w-50" id="exampleInputPassword1" placeholder="Picture" />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3 linkBtn py-2"><strong>SUBMIT</strong></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;