/* eslint-disable react/prop-types */
import './style.scss'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss'
import logo from '../../../assets/logo.png'
import { useNavigate, useLocation } from 'react-router-dom'
import TuneIcon from '@mui/icons-material/Tune';
import ListItemIcon from '@mui/material/ListItemIcon';
import GroupsIcon from '@mui/icons-material/Groups';
import CategoryIcon from '@mui/icons-material/Category';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CelebrationIcon from '@mui/icons-material/Celebration';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from "react-redux";
import { setLogged } from '../../../store/login';

const Menu = ({ isOpenMenu, closeModalMenu }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const path = useLocation();
    const dispatch = useDispatch()

    return (
        <div className={isOpenMenu ? "menu menu_active" : "menu"}>
            <div className="flex">
                <div className="content">
                    <div>
                        <div className="top">
                            <h2>Menu</h2>
                            <button onClick={() => closeModalMenu()}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <ul>
                            <li className={path.pathname === "/dashboard" ? "active" : ""} onClick={() => navigate("/dashboard")}>
                                <ListItemIcon>
                                    <TuneIcon />
                                </ListItemIcon>
                                Dashboard
                            </li>
                            <li className={path.pathname === "/products" ? "active" : ""} onClick={() => navigate("/products")}>
                                <ListItemIcon>
                                    <BusinessCenterIcon />
                                </ListItemIcon>
                                Products List
                            </li>
                            <li className={path.pathname === "/products/create" ? "active" : ""} onClick={() => navigate("/products/create")}>
                                <ListItemIcon>
                                    <AddShoppingCartIcon />
                                </ListItemIcon>
                                Add Product
                            </li>
                            <li className={path.pathname === "/categories" ? "active" : ""} onClick={() => navigate("/categories")}>
                                <ListItemIcon>
                                    <CategoryIcon />
                                </ListItemIcon>
                                Categories
                            </li>
                            <li className={path.pathname === "/orders" ? "active" : ""} onClick={() => navigate("/orders")}>
                                <ListItemIcon>
                                    <LocalGroceryStoreIcon />
                                </ListItemIcon>
                                Orders
                            </li>
                            <li className={path.pathname === "/customers" ? "active" : ""} onClick={() => navigate("/customers")}>
                                <ListItemIcon>
                                    <GroupsIcon />
                                </ListItemIcon>
                                Customers
                            </li>
                            <li className={path.pathname === "/promocode" ? "active" : ""} onClick={() => navigate("/promocode")}>
                                <ListItemIcon>
                                    <CelebrationIcon />
                                </ListItemIcon>
                                Promocode
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="logOut" onClick={() => { navigate("/"), dispatch(setLogged(false)) }}>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <p>Log out</p>
                        </div>
                    </div>
                </div>
                <div style={{ "flex": "1" }} onClick={() => closeModalMenu()}></div>
            </div>
        </div>
    )
}

export default Menu