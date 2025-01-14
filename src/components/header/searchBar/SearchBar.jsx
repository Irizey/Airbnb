import './style.scss';
import searchIcon from './search.svg'
import Link from "../link/Link.jsx";
function searchBar() {
    return (
        <>
            <div className="searchBar">
                <div className="searchBar__btn-wrapper">
                    <button className="searchBar__btn">
                        <Link text='Anywhere'/>
                    </button>
                    <button className="searchBar__btn">
                        <Link text='Any week'/>
                    </button>
                    <button className="searchBar__btn">
                        <Link text='Add quests' style='light'/>
                    </button>
                </div>

                <button className="searchBar__btn-search">
                    <img  className="icon" src={searchIcon} alt="icon searche button"/>
                </button>
            </div>
        </>
    )
}

export default searchBar