import React from 'react'
import Established from '../../components/Established'
import Logo from '../../components/Logo'
import LogoSubtitle from '../../components/LogoSubtitle'

function Header() {
    return (
        <div className='mt-4'>
            <div className='w-full flex items-start gap-2 h-[92px]'>
                <div>
                    <div className='w-32 h-20 border-2 border-orange-950 py-1 px-2 overflow-hidden'>
                        <h2 className='text-xs font-bold leading-3.5 tracking-wider uppercase line-clamp-2 wrap-break-word'>
                            {/* max 22 */}
                            DDDDDDDDDDDDDDDDDDDDDD
                        </h2>
                        <p className='line-clamp-3 leading-3 mt-1 overflow-hidden wrap-break-word'>
                            {/* max 39 */}
                            DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
                        </p>
                    </div>
                </div>
                <div className="w-full h-[92px] -my-1.5 flex flex-col justify-between text-orange-950 pointer-events-none whitespace-nowrap">
                    <Established />
                    <div className='flex items-center justify-around'>
                        <div className='flex-1 px-1 py-2 ms-2 font-bold uppercase'>
                            <div className='h-0.5 border-t-2 w-full my-[1px]' />
                        </div>
                        <div className='w-fit max-w-[360px] flex mx-auto items-center justify-center'>
                            <h1 className='text-3xl text-shadow-main-logo-mobile tracking-[3px] w-fit font-main-logo uppercase truncate'>Open Newspaper Blablalbalbalb</h1>
                        </div>
                        <div className='flex-1 px-1 py-2 me-2 font-bold uppercase'>
                            <div className='h-0.5 border-t-2 w-full' />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 font-main-subtitle-logo font-bold text-center">
                        <div className="h-0.5 border-t-2 border-orange-950 flex-1"></div>
                        <p className='max-w-72 whitespace-nowrap font-bold tracking-wider text-xs uppercase truncate'>Make Your Own News blablablablablalbablalbalbalbalb</p>
                        <div className="h-0.5 border-t-2 border-orange-950 flex-1"></div>
                    </div>
                </div>
                <div>
                    <div className='w-32 h-20 border-2 border-orange-950 py-1 px-2 overflow-hidden'>
                        <h2 className='text-sm font-bold leading-3.5 tracking-wider uppercase line-clamp-2'>Lorem ipsum dolor sit.</h2>
                        <p className='line-clamp-2 leading-3 mt-0.5 overflow-hidden'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sed corporis et, accusamus officia cumque mollitia aliquam tempore unde modi obcaecati, aut non veniam quam? Quaerat sequi reiciendis nobis minima?
                        </p>
                        <p className='font-bold mt-0.5'>Call us: 021-212909</p>
                    </div>
                </div>
            </div>
            <div className="h-1 w-full bg-orange-950" />
            <div className='flex font-bold uppercase items-center justify-between w-full font-main-header-footer px-4'>
                <p className="min-w-[200px]">Volume XXIV</p>
                <p className="min-w-[200px] text-center">Wednesday, September 18<span className="text-[8px] align-super">th</span>, 2025</p>
                <p className="min-w-[200px] text-right">Price 5 Cents</p>
            </div>
            <div className='h-1 w-full bg-orange-950' />
        </div>
    )
}

export default Header