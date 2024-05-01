import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className={style.header}>
            <div className={style.headerLogo}>
                <img src="/src/assets/shared/logo.svg" alt="logo" />
            </div>
            <div className={style.stripe}></div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/home"
                            className={(navData) =>
                                navData.isActive ? style.active : undefined
                            }
                        >
                            <span>00</span> <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/destination">
                            <span>01</span> <span>Destination</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/crew">
                            <span>02</span> <span>Crew</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/technology">
                            <span>03</span> <span>Technology</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
