import "./header.css";

const Header = () => {
    return (
        <div className="header">
          <div className="header__inner container">
            <h1>Личный кабинет</h1>
            <img src="logo.svg" alt="логотип"></img>
          </div>
        </div>
    )
}

export default Header;