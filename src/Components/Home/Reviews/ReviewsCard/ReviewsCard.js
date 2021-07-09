import React, { useEffect, useState } from 'react';
import ReviewCardDetail from '../ReviewCardDetail/ReviewCardDetail';

const ReviewsCard = () => {
    const [reviewCardInfo, setReviewCardInfo] = useState([]);
    useEffect( () => {
        fetch('https://floating-forest-16007.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviewCardInfo(data))
    }, [])
    return (
        <div className="row justify-content-center" style={{ padding: '60px 0px 60px 0px', backgroundImage: `${'url(https://images.pexels.com/photos/3105066/pexels-photo-3105066.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1920)'}`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat'}}>
            <h2 className="text-center" style={{fontSize: '48px', margin:'40px 0px', color: 'white', fontWeight: 600}}>Reviews</h2>
            {
                reviewCardInfo.map(review => <ReviewCardDetail review={review}></ReviewCardDetail>)
                
            }
        </div>
    );
};

export default ReviewsCard;