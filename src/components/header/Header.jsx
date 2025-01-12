import './style.scss';
import Logo from "./logo/Logo.jsx";
import SearchBar from "./searchBar/SearchBar.jsx";

function Header() {
    return (
        <>
          <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <Logo/>
                    </div>
                    <div className="header__search">
                        <SearchBar/>
                    </div>
                    <div className="header__user">USER MENU</div>
                </div>
            </div>
          </header>
        </>
    )
}

export default Header