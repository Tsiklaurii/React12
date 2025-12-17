import LatestNews from "../LatestNews/LatestNews"
import Footer from "../Footer/Footer"
import FeaturedGames from "../FeaturedGames/FeaturedGames"

import banner from '../../assets/images/GTA_6_banner.svg'
import GTA_5 from '../../assets/images/game_posters/GTA_5.svg'
import GTA_online from '../../assets/images/game_posters/GTA_online.svg'
import RED from '../../assets/images/game_posters/RED.svg'
import RED_online from '../../assets/images/game_posters/RED_Online.svg'
import game_poster_1 from '../../assets/images/game_posters/game_poster_1.svg'
import game_poster_2 from '../../assets/images/game_posters/game_poster_2.svg'
import game_poster_3 from '../../assets/images/game_posters/game_poster_3.svg'
import GamesLauncher from "../GamesLauncher/GamesLauncher"

import { motion } from "motion/react"

const LandingPage = () => {
    return (
        <div className="bg-[#101010] font-helvetica justify-items-center">

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full">
                <img src={banner} alt="banner" className="w-full" />
            </motion.div>

            <FeaturedGames gamePoster1={GTA_5} gamePoster2={GTA_online} gamePoster3={RED} gamePoster4={RED_online} />
            <LatestNews
                gamePoster1={game_poster_1}
                title1="Grand Theft Auto VI - Veja o 1º trailer agora"
                date1="Rockstar Games &nbsp;&nbsp;&nbsp; 5 de dezembro de 2023"

                gamePoster2={game_poster_2}
                title2="1º Trailer. Terça-feira, 5 de &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dezembro. 9h Et."
                date2="Rockstar Games &nbsp;&nbsp;1  de dezembro de 2023"

                gamePoster3={game_poster_3}
                title3="Nova atualização de GTA Online chegando em dezembro"
                date3="GTA Online &nbsp;&nbsp; 30 de novembro de 2023"
            />
            <GamesLauncher />
            <Footer />
        </div>
    )
}

export default LandingPage