import "./header.css";
import logo from "../../img/logo.jpg"

const Header = () => {
    return (
        <div className="header__inner container">
            <a className="header__logo" href="https://bandaumnikov.ru/" aria-label="логотип компании" target="_blank" rel="noreferrer">
              <img className="header__img" src={logo} alt="логотип"></img>
            </a>
            <h1 className="header__title">Личный кабинет</h1>
            <a className="header__link button" href="https://bandaumnikov.ru/">Выход</a>
        </div>
    )
}

export default Header;