/* eslint-disable react/prop-types */
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './style.scss'
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BodyContent = ({ children }) => {

    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const divRef = useRef();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    useEffect(() => {
        const divElement = divRef.current;

        if (divElement) {
            divElement.addEventListener('scroll', controlNavbar);
            return () => {
                divElement.removeEventListener('scroll', controlNavbar);
            }
        }
    }, [divRef, lastScrollY]);

    const controlNavbar = () => {
        const divElement = divRef.current;

        if (divElement.scrollTop > 50) {
            if (divElement.scrollTop > lastScrollY) {
                setShow("show");
            }
        } else {
            setShow("top");
        }

        setLastScrollY(divElement.scrollTop);
    };


    return (
        <div className='body'>
            <div className="bodyContent" ref={divRef}>
                <div className="children">
                    <Header show={show} />
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default BodyContent