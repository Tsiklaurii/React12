import logo from '../../assets/images/logo.svg';
import arrow_drop_down from '../../assets/images/arrow_drop_down.svg'
import search from '../../assets/images/search.svg'
import login from '../../assets/images/login.svg'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

import { motion } from "motion/react"

const Header = () => {
    return (
        <div className="bg-[#020202] p-[29px_140px] flex items-center place-content-between w-full">
            <div className='flex items-center gap-[47px]'>

                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <Link to="/">
                        <img src={logo} alt="logo" className='w-[53px] h-[54px] cursor-pointer' />
                    </Link>
                </motion.div>

                <div className='flex gap-6'>
                    <motion.div
                        className='flex items-center gap-[5px]'
                        whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Link to="/jogos" className='text-[#FFFFFF]'>Jogos</Link>
                        <img src={arrow_drop_down} alt="arrow_drop_down" className='cursor-pointer' />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Link to="/loja" className='text-[#FFFFFF]'>Loja</Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <Link to="/ajuda" className='text-[#FFFFFF]'>Ajuda</Link>
                    </motion.div>
                </div>
            </div>
            <div className='flex gap-10'>
                <Link to="launcher">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}>
                        <Button btnText='Baixe o Launcher' className='p-[11px_16px]' />
                    </motion.div>
                </Link>
                <div className='flex gap-6'>
                    <img src={search} alt="search" className='w-12 h-12 cursor-pointer' />
                    <img src={login} alt="login" className='w-12 h-12 cursor-pointer' />
                </div>
            </div>
        </div >
    )
}

export default Header