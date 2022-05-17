import React from 'react';

const InfoCard = ({img, cardTitle,bgClass}) => {
    return (
        <div>
            <div className={`card card-side bg-base-100 shadow-xl ${bgClass}`}>
  <figure className='pl-5 pt-5'><img src={img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{cardTitle}</h2>
   
    </div>
  </div>
</div>
      
    );
};

export default InfoCard;