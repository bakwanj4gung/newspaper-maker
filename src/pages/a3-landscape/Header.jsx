import React from 'react'
import AdvertisementHeader from '../../components/AdvertisementHeader'
import Established from '../../components/Established'
import Logo from '../../components/Logo'
import LogoSubtitle from '../../components/LogoSubtitle'

function Header() {
    return (
        <div className='mt-6'>
            <div className='flex items-center justify-between gap-4 h-[118px] w-full'>
                <div className='w-60 h-[100px]'>
                    <div className='w-60 h-[100px] border-2 border-orange-950 py-1 px-2 overflow-hidden'>
                        <h2 className='text-lg font-bold tracking-wider uppercase whitespace-nowrap'>Lorem, ipsum dolor.</h2>
                        <p className='overflow-hidden'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, vel iure! Illum, quae explicabo nesciunt ipsam iure magni optio possimus laborum consequatur eaque, nulla, neque iste rem totam placeat corporis.
                        </p>
                    </div>
                </div>
                <div className="w-full mx-auto text-orange-950 pointer-events-none whitespace-nowrap">
                    <div className='flex items-center justify-around'>
                        <h1 className='text-9xl leading-24 text-shadow-main-logo tracking-[3px] w-fit max-w-[1020px] overflow-hidden font-main-logo uppercase'>The Newspaper</h1>
                    </div>
                </div>
                <div className='w-60 h-[100px]'>
                    <div className='w-60 h-[100px] border-2 border-orange-950 py-1 px-2 overflow-hidden'>
                        <h2 className='text-lg font-bold tracking-wider uppercase whitespace-nowrap'>Lorem, ipsum dolor.</h2>
                        <p className='overflow-hidden'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, vel iure! Illum, quae explicabo nesciunt ipsam iure magni optio possimus laborum consequatur eaque, nulla, neque iste rem totam placeat corporis.
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-0.5 border-t-2 w-full uppercase"></div>
            <div className="h-0.5 border-t-2 w-full mt-0.5"></div>
            <div className='grid grid-cols-3 h-6 overflow-hidden font-bold uppercase text-base justify-between w-full font-main-header-footer px-4'>
                <p className="min-w-[270px]">Volume XXIV</p>
                <p className="min-w-[270px] text-center">Wednesday, October 18<span className="text-[8px] align-super">th</span>, 2025</p>
                <p className="min-w-[270px] text-right">Price 5 Cents</p>
            </div>
            <div className='block h-0.5 border-t-2 w-full'></div>
            <div className='block h-0.5 border-t-2 w-full mt-0.5'></div>
        </div>
    )
}

export default Header