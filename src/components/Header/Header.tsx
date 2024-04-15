import style from './Header.module.css';

function Header() {
    return (
        <div className={style.header}>
            <div className={style.headerLogo}>
                <img src="/src/assets/shared/logo.svg" alt="logo" />
                <div className={style.stripe}></div>
            </div>
            <nav>
                <ul>
                    <li>00 HOME</li>
                    <li>01 DESTINATION</li>
                    <li>02 CREW</li>
                    <li>03 TECHNOLOGY</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
