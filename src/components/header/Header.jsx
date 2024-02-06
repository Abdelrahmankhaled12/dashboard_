/* eslint-disable react/prop-types */
import './style.scss'
import admin from '../../assets/admin.png'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TranslateIcon from '@mui/icons-material/Translate';
import SearchIcon from '@mui/icons-material/Search';
import DehazeIcon from '@mui/icons-material/Dehaze';
const Header = ({ show }) => {

    return (
        <header className={show}>
            <div className="content">
                <div className="div">
                    <div className="sideBar">
                        <button>
                            <DehazeIcon />
                        </button>
                    </div>
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
    )
}

export default Header