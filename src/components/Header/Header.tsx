import style from './Header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <div className={style.headerLogo}>
                <img src="/src/assets/shared/logo.svg" alt="logo"/>
            </div>
            <div className={style.stripe}></div>
            <nav>
                <ul>
                    <li><a href="#">00 Home</a></li>
                    <li><a href="#">01 DESTINATION</a></li>
                    <li><a href="#">02 Crew</a></li>
                    <li><a href="#">03 TECHNOLOGY</a></li>
                </ul>
             </nav>
        </header>
    )
}

export default Header;