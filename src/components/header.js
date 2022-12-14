import {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';

function Header(){

    const [isActive, setIsActive] = useState(false)

    const handeClick = event => {
        setIsActive(current => !current)
    }

    return <header>
                <div className="header-inner">
                    <Link to="/">
                        <h1>
                            Bouet <span>Louis</span>
                        </h1>
                    </Link>
                    <div onClick={handeClick} className="menu-toggle cursor-hover-element">
                        <div class="menu-toggle-inner magnet">
                            <div className={isActive ? 'line top-line active' : 'line top-line'}></div>
                            <div className={isActive ? 'line bottom-line active' : 'line bottom-line'}></div>
                        </div>
                    </div>
                    <nav className={isActive ? 'active' :''}>
                        <Link to="/" onClick={handeClick}>Home</Link>
                        <Link to="/about" onClick={handeClick}>À propos</Link>
                        <Link to="/project" onClick={handeClick}>Mes projets</Link>
                        <Link to="/contact" onClick={handeClick}>Contact</Link>
                    </nav>
                    <Outlet />
                    <div className={isActive ? 'slide active' : 'slide'}></div>
                </div>
            </header>
    }

export default Header