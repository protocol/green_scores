// react
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// icons
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

// styles
import classes from './Header.module.scss'

const Header = () => {

    // Navigation hook:
    const navigate = useNavigate(); 

    // Menu hook:
    const [menuOpen, setMenuOpen] = useState(false);

    // Size hook:
    const [size, setSize] = useState({
        width: undefined, 
        height: undefined,
    });

    // Resizes the window:
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //  Resizes the menu:
    useEffect(() => {
        if (size.width > 768 && menuOpen){
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    // Handles menu toggling:
    const menuToggleHandler = () => {
        setMenuOpen((p) => !p); 
    }

    // Routes user to CTA: 
    const ctaClickHandler = () => {
        menuToggleHandler(); 
        navigate("/cta")
    }

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                {/* Logo */}
                <Link to="/" className={classes.header__content__logo}>
                    Filecoin Green
                </Link> 

                {/* Navbar */}
                <nav 
                    className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}
                >
                    <ul>
                        <li>
                            <Link to="/page1" onClick={menuToggleHandler}>Page 1 </Link>
                        </li>
                        <li>
                            <Link to="/page2" onClick={menuToggleHandler}>Page 2 </Link>
                        </li>
                        <li>
                            <Link to="/page3" onClick={menuToggleHandler}>Page 3 </Link>
                        </li>
                    </ul>
                    <button onClick={ctaClickHandler}>
                        Learn More
                    </button>
                </nav>

                {/* Toggle Menu */}
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler}/>
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler}/>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
