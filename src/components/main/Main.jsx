import './style.scss';
import Card from "./card/Card.jsx";
import cardsDate from './../../data/data.json'
function Main() {
    return (
        <>
            <main>
                <div className="container">
                    <div className="main__cards">
                        {
                            cardsDate.map((item, index) => {
                                return  <Card data={item}/>
                            })
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main