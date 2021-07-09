import React from 'react';

const AllServiceList = (props) => {
    const handleDelete = (id, event) => {
        fetch(`https://floating-forest-16007.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    document.getElementById(`${id}`).style.display = 'none';
                }
            })
    }
    return (
        <div class="card col-md-4 rounded me-3" id={props.email._id} style={{ maxWidth: "20rem"}}>
            <img src={`data:image/png;base64,${props.email.image.img}`} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.email.title}</h5>
                <p class="card-text text-muted text-justify">{props.email.description}</p>
                <button onClick={() => handleDelete(`${props.email._id}`, 'event')} className="btn btn-warning" type="submit">Remove Service</button>
            </div>
        </div>
            );
};
export default AllServiceList;