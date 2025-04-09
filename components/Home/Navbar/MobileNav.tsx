import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

const MobileNav = () => {
    return (
        <div>
            {/* overlay */}
            <div className='fixed inset-0 transform transition-all duration-300 z-[1000] bg-black opacity-70'></div>

            {/* nav links */}
            <div className='fixed text-white flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1006] transform transition-all duration-300'>
                {navLinks.map((link) => {
                    return <Link key={link.id} href={link.label}>
                        <p className='text-white text-[20px] ml-12 border-b-[1.5px] w-fit pb-1 border-white sm:text-[30px]'>{link.label}</p>
                    </Link>
                })}

                {/* close button */}
                <CgClose className='absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8 cursor-pointer' />
            </div>

        </div>
    );
};

export default MobileNav;