import './style.scss';
import Logo from "./logo/Logo.jsx";
import SearchBar from "./searchBar/SearchBar.jsx";
import UserMenu from "./userMenu/UserMenu.jsx";

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
                    <div className="header__user">
                        <UserMenu/>
                    </div>
                </div>
            </div>
          </header>
        </>
    )
}

export default Header