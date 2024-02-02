import ContentWrapper from '../contentWrapper/ContentWrapper'
import ButtonGroupIcon from './buttonGroupIcon/ButtonGroupIcon'
import MenuIcon from '@mui/icons-material/Menu';
import './style.scss'

const HeaderDash = () => {
    return (
        <header className='headerDashboard'>
            <ContentWrapper>
                <div className="flex">
                    <button className='menuDash'>
                        <MenuIcon />
                    </button>
                    <div className="">
                        <ButtonGroupIcon />
                    </div>
                </div>
            </ContentWrapper>
        </header>
    )
}

export default HeaderDash