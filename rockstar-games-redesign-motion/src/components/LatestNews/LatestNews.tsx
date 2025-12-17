
type LatestNewsProps = {
    gamePoster1: string
    gamePoster2: string
    gamePoster3: string
    title1: string
    title2: string
    title3: string
    date1: string
    date2: string
    date3: string
}

const LatestNews = ({ gamePoster1, gamePoster2, gamePoster3, title1, title2, title3, date1, date2, date3 }: LatestNewsProps) => {
    return (
        <div className="w-[1160px] flex flex-col gap-10 mb-28">
            <p className="text-[48px] font-extrabold text-[#F6F6F6]">Últimas Notícias</p>
            <div className="flex gap-10">
                <div className="w-[860px] h-[488px] bg-[#020202] rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300">
                    <img src={gamePoster1} alt="game poster 1" className="h-[352px] w-full object-cover object-top" />
                    <div className="p-[20px_32px] flex flex-col gap-[5px]">
                        <h2 className="text-[32px] text-[#FFFFFF]">{title1}</h2>
                        <p className="text-[#797979]">{date1}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="w-[260px] h-56 bg-[#020202] rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300">
                        <img src={gamePoster2} alt="game poster 2" className="h-[142px] w-full object-cover object-top" />
                        <div className="p-[8px_31px_12px_12px] flex flex-col gap-1">
                            <h2 className="text-[13px] text-[#FFFFFF]">{title2}</h2>
                            <p className="text-[12px] text-[#797979] whitespace-pre-line">{date2}</p>
                        </div>
                    </div>
                    <div className="w-[260px] h-56 bg-[#020202] rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300">
                        <img src={gamePoster3} alt="game poster 3" className="h-[142px] w-full object-cover object-top" />
                        <div className="p-[8px_12px] flex flex-col gap-1">
                            <h2 className="text-[13px] text-[#FFFFFF]">{title3}</h2>
                            <p className="text-[12px] text-[#797979]">{date3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNews