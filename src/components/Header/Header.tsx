import style from './Header.module.css'

function Header() {
    return (
        <div className={style.header}>
            <div className={style.headerColumn}>
                <img src="/src/assets/shared/logo.svg" alt="logo"/>
                <hr/>
            </div>
            <div className={style.headerNav}>
                <nav>
                    <ul>
                        <li>00 HOME</li>
                        <li>01 DESTINATION</li>
                        <li>02 CREW</li>
                        <li>03 TECHNOLOGY</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;