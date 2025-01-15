import './style.scss';
import FilterBtn from "../filterBtn/FilterBtn.jsx";
import CategoryItem from "../categoryItem/CategoryItem.jsx";

import categoriesData from './../../../data/categories.json'
function Categories() {
    return (
        <>
            <div className="categories">
                <div className="container">
                    <div className="categories__row">
                        <div className="categories__list">

                            {categoriesData.map((cat)=>{
                                return <CategoryItem title={cat.title} img={cat.img} key={cat.id}/>
                            })}
                        </div>
                        <div className="categories__filter">
                            <FilterBtn/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories