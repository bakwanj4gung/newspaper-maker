function Logo({paperSize}) {
    return (
        <div className={`${paperSize == 'a4' ? '' : 'my-4'} flex w-fit max-w-xl mx-auto items-center justify-center`}>
            <h1 className="w-fit font-main-logo uppercase text-5xl text-shadow-main-logo tracking-[4px] truncate">Open Newspaper Blablalbalbalb</h1>
        </div>
    )
}

export default Logo