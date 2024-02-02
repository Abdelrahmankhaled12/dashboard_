/* eslint-disable react/prop-types */
import HeaderDash from '../header/HeaderDash'
import FooterDash from '../footer/FooterDash'
import './style.scss'

const BodyContent = ({ children }) => {
    return (
        <div className='body'>
            <div className="bodyContent">
                <div className="children">
                    {/* <HeaderDash /> */}
                    {children}
                </div>
                {/* <FooterDash /> */}
            </div>
        </div>
    )
}

export default BodyContent