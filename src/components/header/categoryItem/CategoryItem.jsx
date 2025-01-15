import styles from './style.module.scss';

function CategoryItem({title, img}) {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.img}>
                    <img src={img} alt="#"/>
                </div>
                <div className={styles.title}   >
                    {title}
                </div>
            </div>
        </>
    )
}

export default CategoryItem