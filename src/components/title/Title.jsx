/* eslint-disable react/prop-types */
import './style.scss'
import { useNavigate } from 'react-router-dom'

const Title = ({ title }) => {

    const navigate = useNavigate();

    return (
        <div className='title'>
            <div className="flex">
                <p onClick={() => navigate("/Admin/dashboard/default")}>eCommerce</p>
                <span>/</span>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Title