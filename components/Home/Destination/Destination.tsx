import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import DestinationSlider from './DestinationSlider';

const Destination = () => {
    return (
        <div className='py-20'>
            {/* section heading */}
            <SectionHeading heading='Exploring Populer Destination' />

            {/* section content */}
            <div className='mt-14 w-[80%] mx-auto'>
                <DestinationSlider />
            </div>

        </div>
    );
};

export default Destination;