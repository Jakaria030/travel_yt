'use client';
import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { TbAirBalloon } from 'react-icons/tb';

type Props = {
    handleShowNav: () => void;
};

const Nav = ({handleShowNav}: Props) => {
    
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if(window.scrollY >= 90){
                setNavBg(true);
            }

            if(window.scrollY < 90){
                setNavBg(false);
            }
        }

        window.addEventListener('scroll', handler);

        return () => window.removeEventListener('scroll', handler);
        
    }, []);


    return (
        <div className={`${navBg && 'bg-blue-950 shadow-md'} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
            <div className='flex items-center justify-between h-full w-[90%] sm:w-[80%] mx-auto'>
                {/* logo */}
                <div className='flex items-center space-x-2 cursor-pointer'>
                    <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
                        <TbAirBalloon className='w-6 h-6 text-white' />
                    </div>
                    <h1 className='text-xl md:text-2xl text-white uppercase font-bold'>Tripi</h1>
                </div>

                {/* nav links */}
                <div className='hidden lg:flex items-center space-x-10'>
                    {navLinks.map((link) => {
                        return <Link key={link.id} href={link.url}>
                            <p className='relative text-white text-base font-medium w-fit block after:block after:content-[""] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition duration-300 after:origin-center'>{link.label}</p>
                        </Link>
                    })}
                </div>
                
                {/* buttons */}
                <div className='flex items-center space-x-4'>
                    {/* book now button */}
                    <button className='px-8 py-2 md:px-12 md:py-2.5 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg cursor-pointer'>Book Now</button>

                    {/* burger menu button */}
                    <HiBars3BottomRight onClick={handleShowNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
                </div>
            </div>
        </div>
    );
};

export default Nav;