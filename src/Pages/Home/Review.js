import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
    <div className="flex items-center">
    <div className="avatar">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
    <img src= {review.img} alt=""/>
  

</div>
    <div className='p-2'>
        <h4 className='text-xl p-2'>{review.name}</h4>
        <p>{review.location}</p>
    </div>
  </div>
  </div>
</div>
</div>

    );
};

export default Review;