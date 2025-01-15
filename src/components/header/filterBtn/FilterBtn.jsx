import './style.scss';
import filterIcon from './filters.svg'
function FilterBtn() {
    return (
        <>
            <button className="filter-btn">
                <img src={filterIcon} alt="Filter Icon"/>
                Filters
            </button>
        </>
    )
}

export default FilterBtn