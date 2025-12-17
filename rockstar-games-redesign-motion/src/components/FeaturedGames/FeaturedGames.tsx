import { Link } from "react-router-dom"
import Button from "../Button/Button"

import { motion } from "motion/react"

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

                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 1 }}
                    className="text-[48px] font-extrabold">
                    Jogos em Destaque
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 1 }}
                    className="flex gap-4">

                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-[#606060] p-[4px_24px] rounded-[100px] cursor-pointer hover:bg-[#4b4b4b] transition-colors">PC</motion.button>

                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-[#606060] p-[4px_24px] rounded-[100px] cursor-pointer hover:bg-[#4b4b4b] transition-colors">Console</motion.button>

                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-[#606060] p-[4px_24px] rounded-[100px] cursor-pointer hover:bg-[#4b4b4b] transition-colors">Dispositivos Portáteis</motion.button>
                </motion.div>
            </div>

            <div className="flex gap-10 m-[40px_0px_64px_0px]">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    viewport={{ once: true, amount: 0.4 }}>
                    <Link to="/game/1">
                        <img src={gamePoster1} alt="game poster" className="w-[260px] h-[315.85px] rounded-2xl cursor-pointer" />
                    </Link>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
                    viewport={{ once: true, amount: 0.4 }}>
                    <Link to="/game/2">
                        <img src={gamePoster2} alt="game poster" className="w-[260px] h-[315.85px] rounded-2xl cursor-pointer" />
                    </Link>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1.4 } }}
                    viewport={{ once: true, amount: 0.4 }}>
                    <Link to="/game/3">
                        <img src={gamePoster3} alt="game poster" className="w-[260px] h-[315.85px] rounded-2xl cursor-pointer" />
                    </Link>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1.6 } }}
                    viewport={{ once: true, amount: 0.5 }}>
                    <Link to="/game/4">
                        <img src={gamePoster4} alt="game poster" className="w-[260px] h-[315.85px] rounded-2xl cursor-pointer" />
                    </Link>
                </motion.div>
            </div>

            <div className="flex justify-center">
                <Link to="/todosjogos">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.6 } }}
                        viewport={{ once: true, amount: 0.5 }}>
                        <Button btnText="Ver todos os jogos" className="p-[15px_48px]" />
                    </motion.div>
                </Link>
            </div>
        </div >
    )
}

export default FeaturedGames