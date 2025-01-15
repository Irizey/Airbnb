import styleCard from './style.module.scss';
import starIcon from './star.svg'
function Card({data}) {

    const {location, desc, rating, price_per_night, dates_available, img, img2x,} = data

    return (
        <>
            <article className={styleCard.card}>
                <a href="#" className={styleCard.link}>

                </a>
                <img src={img}
                     srcSet={`${img2x} 2x `}
                     alt={location}
                     className={styleCard.img}
                />

                <div className={styleCard.descWrapper}>

                    <div className={styleCard.titleWrapper}>
                        <h3 className={styleCard.title}>
                            {location}
                        </h3>
                        <div className={styleCard.rating}>
                            <img src={starIcon} alt="Star Icon"/>
                            {rating}
                        </div>
                    </div>

                    <p className={styleCard.desc}>
                        {desc}
                    </p>
                    <p className={styleCard.date}>
                        {dates_available}
                    </p>

                    <p className={styleCard.price}>
                        <strong>{price_per_night}$</strong> night
                    </p>
                </div>
            </article>
        </>
    )
}

export default Card