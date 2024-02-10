/* eslint-disable react/prop-types */
import './style.scss'
import admin from '../../assets/admin.png'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TranslateIcon from '@mui/icons-material/Translate';
import SearchIcon from '@mui/icons-material/Search';
import DehazeIcon from '@mui/icons-material/Dehaze';
import  Menu from './menu/Menu';
import { useState } from 'react';
const Header = ({ show }) => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    return (
        <>
            <header className={show}>
                <div className="content">
                    <div className="div">
                        <button className="sideBar" onClick={()=> setIsOpenMenu(true)}>
                            <DehazeIcon />
                        </button>
                        <div className="seacrh">
                            <SearchIcon />
                            <input type="text" placeholder='Search (Ctrl + /)' />
                        </div>
                    </div>
                    <div className="icons">
                        <div className="language">
                            <TranslateIcon />
                        </div>
                        <div className="notifications">
                            <NotificationsNoneIcon />
                        </div>
                        <div className="profile">
                            <img src={admin} alt="" />
                        </div>
                    </div>
                </div>
            </header>
            <Menu isOpenMenu={isOpenMenu} closeModalMenu={()=>setIsOpenMenu(false)} />
        </>

    )
}

export default Header