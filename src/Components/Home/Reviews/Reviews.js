import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import Navbar from '../Navbar/Navbar';
import ServiceSidebar from '../Services/ServiceSidebar/ServiceSidebar';
import '../Services/AddService/AddService.css'

const Reviews = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    
    const [info, setInfo] = useState({});
    const handleBlur = e => {
        if (Object.keys(info).length === 0) {
            const newInfo = { ...info };
            newInfo[e.target.name] = e.target.value;
            newInfo['photo'] = loggedInUser.photo;
            setInfo(newInfo);
        }
        else{
            const newInfo = { ...info };
            newInfo[e.target.name] = e.target.value;
            setInfo(newInfo);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://floating-forest-16007.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
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
                    <div className="containerSection py-5 mt-5 w-50 mx-auto">
                        <form onSubmit={handleSubmit} className="w-75 mx-auto">
                            <h5 className="text-brand" style={{fontFamily: `${"'Cabin', sans-serif"}`}}>Review</h5>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="formLabel">Name</label>
                                <input onBlur={handleBlur} type="text" className="form-control inputForm" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="formLabel">Designation</label>
                                <input onBlur={handleBlur} type="text" className="form-control inputForm" name="status" placeholder="Company's Name/Designation" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea3" className="formLabel">Your Review</label>
                                <textarea onBlur={handleBlur} type="text" class="form-control inputForm" name="review" id="exampleFormControlTextarea3" rows="3" placeholder="Write Your Review"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3 linkBtn py-2">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default Reviews;