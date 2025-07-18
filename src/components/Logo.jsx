import ornament from '../assets/ornament.svg'

function Logo() {
    return (
        <div className="w-full xl:w-fit mx-auto text-orange-950 pointer-events-none whitespace-nowrap">
            <div className="flex items-center gap-4 font-main-subtitle-logo font-bold text-center">
                <div className="h-0.5 border-t-2 border-orange-950 w-full"></div>
                <p className="whitespace-nowrap font-bold tracking-wider text-xs uppercase">EST. 2025</p>
                <div className="h-0.5 border-t-2 border-orange-950 w-full"></div>
            </div>
            <div className="flex items-center justify-center">
                <div>
                    <img src={ornament} alt="ornament" className='w-20 rotate-y-180' />
                </div>
                <h1 className="w-fit mt-2 font-main-logo text-5xl text-center font-bold uppercase text-shadow-main-logo tracking-wide">Open Newspaper</h1>
                <div>
                    <img src={ornament} alt="ornament" className='w-20' />
                </div>
            </div>
            <div className="flex items-center gap-4 font-main-subtitle-logo font-bold text-center mt-2">
                <div className="h-0.5 border-t-2 border-orange-950 flex-1"></div>
                <p className="whitespace-nowrap font-bold tracking-wider text-sm uppercase">Make Your Own News</p>
                <div className="h-0.5 border-t-2 border-orange-950 flex-1"></div>
            </div>
        </div>
    )
}

export default Logo