import { Link } from "react-router-dom"
import Button from "../Button/Button"

type FeaturedGamesProps = {
    gamePoster1: string
    gamePoster2: string
    gamePoster3: string
    gamePoster4: string
}

const FeaturedGames = ({ gamePoster1, gamePoster2, gamePoster3, gamePoster4 }: FeaturedGamesProps) => {
    return (
        <div className="w-[1160px] m-[80px_140px_112.15px_140px]">
            <div className="text-[#F6F6F6] flex items-center place-content-between">
                <p className="text-[48px] font-extrabold">Jogos em Destaque</p>
                <div className="flex gap-4">
                    <button className="bg-[#606060] p-[4px_24px] rounded-[100px] cursor-pointer hover:bg-[#4b4b4b] transition-colors">PC</button>
                    <button className="bg-[#606060] p-[4px_24px] rounded-[100px] cursor-pointer hover:bg-[#4b4b4b] transition-colors">Console</button>
                    <button className="bg-[#606060] p-[4px_24px] rounded-[100px] cursor-pointer hover:bg-[#4b4b4b] transition-colors">Dispositivos Portáteis</button>
                </div>
            </div>
            <div className="flex gap-10 m-[40px_0px_64px_0px]">
                <Link to="/game/1">
                    <img src={gamePoster1} alt="game poster" className="w-[260px] h-[315.85px] rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer" />
                </Link>
                <Link to="/game/2">
                    <img src={gamePoster2} alt="game poster" className="w-[260px] h-[315.85px] rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer" />
                </Link>
                <Link to="/game/3">
                    <img src={gamePoster3} alt="game poster" className="w-[260px] h-[315.85px] rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer" />
                </Link>
                <Link to="/game/4">
                    <img src={gamePoster4} alt="game poster" className="w-[260px] h-[315.85px] rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer" />
                </Link>
            </div>
            <div className="flex justify-center">
                <Link to="/todosjogos"><Button btnText="Ver todos os jogos" className="p-[15px_48px]" /></Link>
            </div>
        </div>
    )
}

export default FeaturedGames