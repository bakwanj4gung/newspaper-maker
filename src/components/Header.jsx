import React from 'react'
import Logo from './Logo'

function Header() {
    return (
        <div className='mt-6'>
            <div className='xl:flex items-center gap-2 w-full'>
                <div className='hidden xl:block border-2 border-orange-950 py-1 px-2 min-w-[300px] max-w-80 overflow-hidden'>
                    <h2 className='text-lg font-bold tracking-wider uppercase truncate'>BAROE! SOESOE MOERNI!</h2>
                    <p className='line-clamp-3 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, vel iure! Illum, quae explicabo nesciunt ipsam iure magni optio possimus laborum consequatur eaque, nulla, neque iste rem totam placeat corporis.</p>
                </div>
                <Logo />
                <div className='md:grid grid-cols-3 gap-4 xl:block mt-2 xl:mt-0'>
                    <div className='block xl:hidden border-2 border-orange-950 py-1 px-2 xl:min-w-[300px] xl:max-w-80 overflow-hidden'>
                        <h2 className='text-lg font-bold tracking-wider uppercase truncate'>BAROE! SOESOE MOERNI!</h2>
                        <p className='line-clamp-3 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, vel iure! Illum, quae explicabo nesciunt ipsam iure magni optio possimus laborum consequatur eaque, nulla, neque iste rem totam placeat corporis.</p>
                    </div>
                    <div className='border-2 border-orange-950 py-1 px-2 xl:min-w-[300px] xl:max-w-80 overflow-hidden'>
                        <h2 className='text-lg font-bold tracking-wider uppercase truncate'>PILIH SADJA SAJA! SAJA DJAWA!</h2>
                        <p className='line-clamp-3 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, vel iure! Illum, quae explicabo nesciunt ipsam iure magni optio possimus laborum consequatur eaque, nulla, neque iste rem totam placeat corporis.</p>
                    </div>
                    <div className='block xl:hidden border-2 border-orange-950 py-1 px-2 xl:min-w-[300px] xl:max-w-80 overflow-hidden'>
                        <h2 className='text-lg font-bold tracking-wider uppercase truncate'>BAROE! SOESOE MOERNI!</h2>
                        <p className='line-clamp-3 text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, vel iure! Illum, quae explicabo nesciunt ipsam iure magni optio possimus laborum consequatur eaque, nulla, neque iste rem totam placeat corporis.</p>
                    </div>
                </div>
            </div>
            <div className="h-0.5 border-t-2 w-full mt-4 uppercase"></div>
            <div className="h-0.5 border-t-2 w-full mt-0.5"></div>
            <div className="font-bold uppercase flex items-center justify-between w-full font-main-header-footer px-4">
                <p className="min-w-[270px]">Issue no 1</p>
                <p className="min-w-[270px] text-center">Wednesday, October 18<span className="text-[8px] align-super">th</span>, 2025</p>
                <p className="min-w-[270px] text-right">World Wide News</p>
            </div>
            <div className="h-0.5 border-t-2 w-full"></div>
            <div className="h-0.5 border-t-2 w-full mt-0.5"></div>
        </div>
    )
}

export default Header