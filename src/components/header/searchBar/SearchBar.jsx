import './style.scss';
import searchIcon from './search.svg'
function searchBar() {
    return (
        <>
            <div className="searchBar">
                <div className="searchBar__btn-wrapper">
                    <button className="searchBar__btn">Anywhere</button>
                    <button className="searchBar__btn">Any week</button>
                    <button className="searchBar__btn">Add quests</button>
                </div>

                <button className="searchBar__btn-search">
                    <img src={searchIcon} alt="icon searche button"/>
                </button>
            </div>
        </>
    )
}

export default searchBar