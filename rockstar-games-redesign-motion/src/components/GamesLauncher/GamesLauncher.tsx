import bg from '../../assets/images/games_lancher_bg.svg'
import games_launcher from '../../assets/images/games_launcher.png'
import rock_games_launcher from '../../assets/images/rock_games_launcher.svg'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

import { motion } from "motion/react"

const GamesLauncher = () => {
    const navigate = useNavigate()

    return (
        <motion.div
            style={{ backgroundImage: `url(${bg})` }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="w-[1160px] h-[535px] rounded-2xl mb-[95px] bg-cover bg-center flex items-center place-content-between">
            <div className='w-[342.20px] h-[471px] flex flex-col place-content-around ml-[76px]'>
                <img src={rock_games_launcher} alt="rock games launcher" className='w-[342.20px] h-[126.74px] cursor-pointer' />
                <h4 className='text-[32px]'>Todos os seus jogos em um só lugar.</h4>

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button btnText='Download' className='font-extrabold w-[260px] p-[15px_48px] ' onClick={() => navigate('/downloaded')} />
                </motion.div>
            </div>
            <img src={games_launcher} alt="games launcher" className='w-[660px] h-[471px]' />
        </motion.div>
    )
}

export default GamesLauncher