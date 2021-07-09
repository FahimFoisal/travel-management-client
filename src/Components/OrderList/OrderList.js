
import React, { useEffect, useState } from 'react';
import OrderListDetail from '../OrderListDetail/OrderListDetail';

const OrderList = () => {
    const [orderedList, setOrderedList] = useState([]);
    useEffect(() => {
        fetch(`https://floating-forest-16007.herokuapp.com/orderedList`)
            .then(res => res.json())
            .then(data => setOrderedList(data))
    }, [])
    // console.log(orderedList.PaymentInfo.card.brand)
    return (
        <div className="w-50 mx-auto my-5" style={{backgroundColor: 'rgb(247,247,249)'}}>
            <div className="row w-75 mx-auto mt-3">
                <h4 className="mt-5" style={{fontFamily: `${"'Cabin', sans-serif"}`}}>Ordered List</h4>
                {
                    orderedList.map(detail => <OrderListDetail orderInfo={detail}></OrderListDetail>)
                }
            </div>
        </div>
    );
};

export default OrderList;