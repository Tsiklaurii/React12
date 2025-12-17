import logo from '../../assets/images/logo.svg';
import arrow_drop_down from '../../assets/images/arrow_drop_down.svg'
import search from '../../assets/images/search.svg'
import login from '../../assets/images/login.svg'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-[#020202] p-[29px_140px] flex items-center place-content-between w-full">
            <div className='flex items-center gap-[47px]'>
                <Link to="/"><img src={logo} alt="logo" className='w-[53px] h-[54px] cursor-pointer' /></Link>
                <div className='flex gap-6'>
                    <div className='flex items-center gap-[5px]'>
                        <Link to="/jogos" className='text-[#FFFFFF]'>Jogos</Link>
                        <img src={arrow_drop_down} alt="arrow_drop_down" className='cursor-pointer' />
                    </div>
                    <Link to="/loja" className='text-[#FFFFFF]'>Loja</Link>
                    <Link to="/ajuda" className='text-[#FFFFFF]'>Ajuda</Link>

                </div>
            </div>
            <div className='flex gap-10'>
                <Link to="launcher"><Button btnText='Baixe o Launcher' className='p-[11px_16px]' /></Link>
                <div className='flex gap-6'>
                    <img src={search} alt="search" className='w-12 h-12 cursor-pointer' />
                    <img src={login} alt="login" className='w-12 h-12 cursor-pointer' />
                </div>
            </div>
        </div >
    )
}

export default Header