import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import WhyChooseCard from './WhyChooseCard';

const WhyChoose = () => {
    return (
        <div className='pt-20 pb-20'>
            {/* section heading */}
            <SectionHeading heading='Why Choose Us' />

            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16'>
                {/* why choose card */}
                <div>
                    <WhyChooseCard image='/images/c1.svg' title='Best Price Guarantee' />
                </div>
                <div>
                    <WhyChooseCard image='/images/c2.svg' title='Easy & Quick Booking' />
                </div>
                <div>
                    <WhyChooseCard image='/images/c3.svg' title='Customer Care 24/7' />
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;