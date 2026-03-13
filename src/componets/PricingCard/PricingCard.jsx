import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    //console.log(pricing)
    const {name, price, duration, info, features} = pricing
    return (
        <div className='border solid shadow-lg  bg-amber-600 rounded-2xl p-4 flex flex-col'>
            {/* card header */}
            <div className=''>
                <h1 className='text-7xl text-white text-center'>{name}</h1>
                
            </div>
            {/* card body */}
            <div>
                <div className='flex  justify-between text-2xl pt-8'>
                    <h4>${price}</h4>
                    <p>{duration}</p>
                    
                </div>
                <div className='p-4 bg-amber-500 rounded-3xl mt-8 flex-1'>
                    <p className='py-6'>{info}</p>
                    {
                        features.map((feature, index )=> <PricingFeatures
                        key={index}
                         feature={feature}></PricingFeatures>)
                    }
                </div>
                <button className='btn btn-warning w-full mt-4'>Subscribe Now</button>
            </div>
            
        </div>
    );
};

export default PricingCard;