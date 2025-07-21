import Logo from './Logo'
import Established from './Established'
import LogoSubtitle from './LogoSubtitle'
import AdvertisementHeader from './AdvertisementHeader'

function Header({paperSize}) {
    return (
        <div className='mt-6'>
            <div className={`${paperSize == 'a4' ? '' :'flex items-start gap-10 h-[118px]'} w-full`}>
                <div>
                    <AdvertisementHeader paperSize={paperSize} title={'Manoesia Biadab!'} addedClass={paperSize == 'a4' ? 'hidden' : 'my-2'}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, vel iure! Illum, quae explicabo nesciunt ipsam iure magni optio possimus laborum consequatur eaque, nulla, neque iste rem totam placeat corporis.
                    </AdvertisementHeader>
                </div>
                <div className="w-full mx-auto text-orange-950 pointer-events-none whitespace-nowrap">
                    <Established />
                    <div className={`${paperSize == 'a4' ? '-my-1' : ''} flex items-center justify-around`}>
                        <div className={`${paperSize == 'a4' ? 'block' : 'hidden'} w-36 border-2 px-1 py-2 font-bold uppercase`}>
                            <p className='leading-2 text-xs text-center'>Issue No.</p>
                            <p className='text-lg text-center'>1</p>
                            <p className='leading-2 text-xs text-center'>Worldwide News</p>
                        </div>
                        <div className='flex-1 px-1 py-2 ms-4 font-bold uppercase'>
                            <div className='h-0.5 border-t-2 w-full my-[1px]' />
                        </div>
                        <Logo paperSize={paperSize} />
                        <div className='flex-1 px-1 py-2 me-4 font-bold uppercase'>
                            <div className='h-0.5 border-t-2 w-full' />
                        </div>
                        <div className={`${paperSize == 'a4' ? 'block' : 'hidden'} w-36 border-2 px-1 py-2 font-bold uppercase`}>
                            <p className='leading-2 text-xs text-center'>Wednesday</p>
                            <p className='text-lg text-center'>18<span className="text-[10px] leading-3 align-super">th</span></p>
                            <p className='leading-2 text-xs text-center'>September 2025</p>
                        </div>
                    </div>
                    <LogoSubtitle />
                </div>
                <div className={paperSize == 'a4' ? 'grid grid-cols-2 mt-2' : 'block'}>
                    <AdvertisementHeader paperSize={paperSize} title={'Manoesia Biadab!'} addedClass={paperSize == 'a4' ? 'block' : 'hidden'}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ad ducimus asperiores omnis nostrum vitae dicta temporibus unde nisi molestias provident, magni enim quos. Repellat quas vero temporibus alias vel.
                    </AdvertisementHeader>
                    <AdvertisementHeader paperSize={paperSize} title={'PILIH SADJA SAJA! SAJA DJAWA!'} addedClass={paperSize == 'a4' ? 'justify-self-end' : 'my-2'}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique ad ducimus asperiores omnis nostrum vitae dicta temporibus unde nisi molestias provident, magni enim quos. Repellat quas vero temporibus alias vel.
                    </AdvertisementHeader>
                </div>
            </div>
            <div className="h-0.5 border-t-2 w-full mt-2 uppercase"></div>
            <div className="h-0.5 border-t-2 w-full mt-0.5"></div>
            <div className={`${paperSize == 'a4' ? 'hidden' : 'flex'} font-bold uppercase items-center justify-between w-full font-main-header-footer px-4`}>
                <p className="min-w-[270px]">Issue no 1</p>
                <p className="min-w-[270px] text-center">Wednesday, October 18<span className="text-[8px] align-super">th</span>, 2025</p>
                <p className="min-w-[270px] text-right">Worldwide News</p>
            </div>
            <div className={`${paperSize == 'a4' ? 'hidden' : 'block'} h-0.5 border-t-2 w-full`}></div>
            <div className={`${paperSize == 'a4' ? 'hidden' : 'block'} h-0.5 border-t-2 w-full mt-0.5`}></div>
        </div>
    )
}

export default Header