import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const PricingFeatures = ({feature}) => {
    return (
        <p className='flex gap-4 '>
            <CircleCheckBig/> {feature}
        </p>
    );
};

export default PricingFeatures;