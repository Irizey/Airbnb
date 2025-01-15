import './style.scss';
import Logo from "./logo/Logo.jsx";
import SearchBar from "./searchBar/SearchBar.jsx";
import UserMenu from "./userMenu/UserMenu.jsx";
import Categories from "./categories/Categories.jsx";

function Header() {
    return (
        <div className='header-wrapper'>
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
          <Categories/>
        </div>
    )
}

export default Header