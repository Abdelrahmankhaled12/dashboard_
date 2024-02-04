import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="flex">
                <div className='madeBy'>
                    © 2024, made with <FontAwesomeIcon icon={faHeart} /> by
                    <span>Abdelrahman</span>
                    &
                    <span>Shehab</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer