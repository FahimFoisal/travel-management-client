import React from 'react';

const ReviewCardDetail = (props) => {
    const { photo, status, name, review } = (props.review)
    return (
        <div class="card col-md-3 mx-3 px-0" style={{ width: "22rem", marginBottom: '100px', backgroundColor: 'white'}}>
            <div class="card-body text-center">
                <p class="card-text lead text-muted" style={{fontSize: '16px'}}>{review}</p>
            </div>
            <div className="card-footer d-flex px-5" style={{backgroundColor: 'white', border: 'none'}}>
                <img src={photo} class="card-img-top rounded-circle w-25" alt="..." />
                <div className='ms-auto mt-2'>
                    <h6 class="card-title mb-0" style={{fontWeight: '600', fontSize: '14px'}}>{name.toUpperCase()}</h6>
                    <p><small className="text-muted lh-1" style={{fontSize: '12px'}}>{status}</small></p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCardDetail;