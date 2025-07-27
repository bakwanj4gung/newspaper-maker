function AdvertisementHeader({paperSize, addedClass, title, children}) {
    return (
        <div className={`${addedClass ?? ''} ${paperSize == 'a4-landscape' ? 'w-60 h-20' : 'w-80 h-[100]'} border-2 border-orange-950 py-1 px-2 overflow-hidden`}>
            <h2 className={`${paperSize == 'a4-landscape' ? 'text-sm' : 'text-lg '} font-bold tracking-wider uppercase truncate`}>{title ?? "???"}</h2>
            <div className={`${paperSize == 'a4-landscape' ? 'line-clamp-3' : 'line-clamp-3'} overflow-hidden`}>
                {children ?? '???'}
            </div>
        </div>
    )
}

export default AdvertisementHeader