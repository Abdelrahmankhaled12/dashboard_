import logo from '../../../assets/logo.avif'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { setLoggedAdmin } from '../../../store/admin'

const Login = () => {

    const [ email , setEmail ] = useState("")
    const [ password , setPassword ] = useState("")
    const dispatch = useDispatch()
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleClick = (email , password) => {
        if(email === "admin@ecommerce.com" && password === "123456789") {
            dispatch(setLoggedAdmin(true))
            navigate("/Admin/categories")
        }else {
            setError(true)
        }
    }

    return (
        <div className="login">
            <ContentWrapper>
                <div className="logo">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="content_box">
                    <div className="form">
                        <h3>Hi, Admin</h3>
                        <form action="" onSubmit={(e)=> e.preventDefault()}>
                            <div className="email">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <input type="email" placeholder='Email Address...' value={email} onChange={(e)=> setEmail(e.target.value)} />
                            </div>
                            <div className="password">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faLock} />
                                </div>
                                <input placeholder='Password...' type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                            </div>
                            <p className='notFount' style={error ? {"display":"block"} : {"display":"none"}}>invalid email or password</p>
                            <button onClick={()=>handleClick(email,password)}>Log In</button>
                        </form>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default Login