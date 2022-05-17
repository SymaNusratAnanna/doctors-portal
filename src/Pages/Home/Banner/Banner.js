import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../PrimaryButton';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 px-12">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  src={chair} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">your new smile start here </h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     <PrimaryButton>Get startted</PrimaryButton>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;