import React, { useState } from 'react';
const OrderListDetail = (props) => {
    console.log(props.orderInfo.class)
    const {name,email,orderedService,status,_id} = props.orderInfo;
    const handleOnChange = (id,event)=> {
        console.log(id)
        console.log(event.target.value)
        if (event.target.value === 'Done') {
            fetch(`https://floating-forest-16007.herokuapp.com/update/`+id, {
            method : 'PATCH',
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify({status: event.target.value, class: 'success'})
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                window.location.reload();
            }
        })
        }
        else if (event.target.value === 'On Going') {
            fetch(`https://floating-forest-16007.herokuapp.com/update/`+id, {
            method : 'PATCH',
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify({status: event.target.value, class: 'warning'})
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                window.location.reload();
            }
        })
        }
        else {
            fetch(`https://floating-forest-16007.herokuapp.com/update/`+id, {
            method : 'PATCH',
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify({status:event.target.value, class: 'danger'})
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                window.location.reload();
            }
        })
        }
     }
    return (
        <div className="col-md-12 pt-2 pb-5">
            <div class="card shadow">
                <div class="card-body" style={{borderBottom: 'none', backgroundColor: 'white', fontFamily:`${"'Cabin', sans-serif"}`}}>
                <h4 class="card-title mb-1"><i class="fas fa-user"></i> {name}</h4>
                    <p class="card-text mb-0" style={{color: 'rgb(128,128,128)'}}><i class="fas fa-money-check-alt"></i> Payment With : {props.orderInfo.PaymentInfo.card.brand} card</p>
                    <p class="card-text mb-0" style={{color: 'rgb(128,128,128)'}}><i class="fas fa-envelope"></i> {email}</p>
                    <p class="card-text mb-0" style={{color: 'rgb(140,180,64)'}}><i class="fas fa-info-circle"></i> {orderedService}</p>
                    <p className="card-text"><i class="fas fa-question-circle"></i> <span class={'badge rounded-pill bg-'+`${props.orderInfo.class}`}>{status}</span></p>
                    <select onChange={(event)=> handleOnChange(`${_id}`,event)} name="status" class="custom-select py-2" style={{borderColor: 'rgb(140,180,64)', borderRadius: '40px', fontFamily:`${"'Cabin', sans-serif"}`, padding: '16px 32px'}}>
                        <option selected>Update Status</option>
                        <option value="Pending">Pending</option>
                        <option value="On Going">On Going</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
export default OrderListDetail;