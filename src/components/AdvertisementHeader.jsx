function AdvertisementHeader({paperSize, addedClass, title, children}) {
    return (
        <div className={`${addedClass ?? ''} ${paperSize == 'a4' ? 'w-lg h-20 flex flex-col justify-center' : 'w-80 h-[100]'} border-2 border-orange-950 py-1 px-2 overflow-hidden`}>
            <h2 className={`${paperSize == 'a4' ? 'text-base' : 'text-lg '} font-bold tracking-wider uppercase truncate`}>{title ?? "???"}</h2>
            <div className={`${paperSize == 'a4' ? 'line-clamp-2' : 'line-clamp-3'} overflow-hidden`}>
                {children ?? '???'}
            </div>
        </div>
    )
}

export default AdvertisementHeader