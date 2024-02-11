import './style.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import cover from '../../assets/cover.png'
import Checkbox from '@mui/material/Checkbox';
import { setLogged } from '../../store/login';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Login = () => {

    const [email, setEmail] = useState("admin@ecommerce.com")
    const [password, setPassword] = useState("123456789")
    const dispatch = useDispatch()
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    dispatch(setLogged(false))

    const handleClick = (email, password) => {
        if (email === "admin@ecommerce.com" && password === "123456789") {
            sessionStorage.setItem('isLoggedIn', true);
            dispatch(setLogged(true))
            navigate("/dashboard")
        } else {
            setError(true)
        }
    }

    return (
        <div className="login">
            <div className="logInContent grid">
                <div className="image">
                    <img src={cover} alt="" />
                </div>
                <div className="form">
                    <div>
                        <div className="text">
                            <h4>Welcome to Admin 👋</h4>
                            <p>Please sign-in to your account and start the adventure</p>
                        </div>
                        <form action="" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder='Email or Username' onChange={(e) => setEmail(e.target.value)} value={email} />
                            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                            <div className="forget">
                                <div>
                                    <Checkbox {...label} /> <span className='remember'>Remember Me</span>
                                </div>
                                <p>Forgot Password?</p>
                            </div>
                            <button onClick={() => handleClick(email, password)} className='styleButton'>Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login