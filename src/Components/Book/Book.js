
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
import ServiceSidebar from '../Home/Services/ServiceSidebar/ServiceSidebar';
import Payment from './Payment/Payment';
import '../Home/Services/AddService/AddService.css'

const Book = () => {
    const {productKey} = useParams();

    const [serviceTitle, setServiceTitle] = useState({});
    useEffect( () => {
        fetch(`https://floating-forest-16007.herokuapp.com/ordered/${productKey}`)
        .then(res => res.json())
        .then(data => setServiceTitle(data))
    }, [])
    const [booking,setBooking] = useState({})
    const handleBlur = e => {
        e.preventDefault();
        const newBooking = { ...booking };
        newBooking[e.target.name] = e.target.value;
        setBooking(newBooking);
    }
//     const stripe = useStripe();
//     const elements = useElements();
//     const [paymentError, setpaymentError] = useState(null);
//   const handleSubmit = async (event) => {
//     // Block native form submission.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     // Get a reference to a mounted CardElement. Elements knows how
//     // to find your CardElement because there can only ever be one of
//     // each type of element.
//     const cardElement = elements.getElement(CardElement);

//     // Use your card Element with other Stripe.js APIs
//     const {error, paymentMethod} = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });

//     if (error) {
//       setpaymentError(error.message);
//     } else {
//       console.log('[PaymentMethod]', paymentMethod);
//     }
//   };
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     fetch('https://floating-forest-16007.herokuapp.com/bookings', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(booking)
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(error => {
    //             console.error(error)
    //         })
            
    // }
    return (
        <div>
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-2">
                    <ServiceSidebar></ServiceSidebar>
                </div>
                <div className="col-md-10">
                    <div className="containerSection mt-5 py-5 mx-auto w-50">
                        <form className="mx-auto w-75">
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="formLabel">Name</label>
                                <input onBlur={handleBlur} type="text" className="form-control inputForm" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="formLabel">Email</label>
                                <input onBlur={handleBlur} type="email" className="form-control inputForm" name="email" placeholder="Enter Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="formLabel">Package</label>
                                <input onBlur={handleBlur} type="text" className="form-control service inputForm" value={serviceTitle.title} name="orderedService" placeholder="Enter Package" />
                                <p style={{fontFamily: `${"'Cabin', sans-serif"}`, fontSize: '16px'}}>Your service charge will be <span style={{color: 'rgb(140,180,64)'}}>${serviceTitle.price}</span></p>
                            </div>
                        </form>
                        <div className="w-75 mx-auto">
                            <Payment paymentData={booking}></Payment>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;