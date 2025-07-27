function Logo({paperSize}) {
    return (
        <div className={`w-fit ${paperSize == 'a4-landscape' ? 'max-w-sm' : 'my-4 max-w-xl'} flex mx-auto items-center justify-center`}>
            <h1 className={`${paperSize == 'a4-landscape' ? 'text-3xl text-shadow-main-logo-mobile tracking-[3px]' : 'text-5xl text-shadow-main-logo tracking-[4px]'} w-fit font-main-logo uppercase truncate`}>Open Newspaper Blablalbalbalb</h1>
        </div>
    )
}

export default Logo