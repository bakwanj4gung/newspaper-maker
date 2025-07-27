import React from 'react'
import Established from '../../components/Established'

function Header() {
    return (
        <div className='mt-4'>
            <div className='flex items-center justify-between gap-4 h-[112px] w-full'>
                <div className='w-[226px] h-24'>
                    <div className='w-[226px] h-24 border-2 border-orange-950 py-1 px-2 overflow-hidden'>
                        <h2 className='text-lg font-bold tracking-wider uppercase leading-5 wrap-break-word line-clamp-2'>
                            {/* max 31 */}
                            DDDOPPPPPPPPPPPPPDDDDDDDDDDDDDD
                        </h2>
                        <p className='overflow-hidden wrap-break-word leading-4 line-clamp-3'>
                            {/* max 70 */}
                            DDDOPPPPPPPPPPPPPDDDDDDDDDDDDDDDDDOPPPPPPPPPPPPPDDDDDDDDDDDDDDDDDOPPPP
                        </p>
                    </div>
                </div>
                <div className="w-full mx-auto text-orange-950 pointer-events-none whitespace-nowrap">
                    <div className='flex items-center justify-around'>
                        <h1 className='text-7xl leading-16 text-shadow-main-logo tracking-[3px] w-fit max-w-[610px] overflow-hidden font-main-logo uppercase'>
                            {/* max 13 */}
                            PPPPPPPPPPPPP
                        </h1>
                    </div>
                </div>
                <div className='w-[226px] h-24'>
                    <div className='w-[226px] h-24 border-2 border-orange-950 py-1 px-2 overflow-hidden'>
                        <h2 className='text-lg font-bold tracking-wider uppercase leading-5 wrap-break-word line-clamp-2'>
                            {/* max 31 */}
                            DDDOPPPPPPPPPPPPPDDDDDDDDDDDDDD
                        </h2>
                        <p className='overflow-hidden wrap-break-word leading-4 line-clamp-3'>
                            {/* max 70 */}
                            DDDOPPPPPPPPPPPPPDDDDDDDDDDDDDDDDDOPPPPPPPPPPPPPDDDDDDDDDDDDDDDDDOPPPP
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-0.5 border-t-2 w-full uppercase"></div>
            <div className="h-0.5 border-t-2 w-full mt-0.5"></div>
            <div className='grid grid-cols-3 h-6 overflow-hidden font-bold uppercase text-base justify-between w-full font-main-header-footer px-4'>
                <p className="min-w-[270px]">
                    {/* max 31 */}
                    DDDDDDDDDDDDDDDOPPPPPPPPPPPPPDD
                </p>
                <p className="min-w-[270px] text-center">Wednesday, SEPTEMBER 18<span className="text-[8px] align-super">th</span>, 2025</p>
                <p className="min-w-[270px] text-right">
                    {/* max 31 */}
                    DDDDDDDDDDDDDDDOPPPPPPPPPPPPPDD
                </p>
            </div>
            <div className='block h-0.5 border-t-2 w-full'></div>
            <div className='block h-0.5 border-t-2 w-full mt-0.5'></div>
        </div>
    )
}

export default Header