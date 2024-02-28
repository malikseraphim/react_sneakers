import { useEffect, useState } from 'react';
import styles from './Card.module.scss'

const Card = ({ sneaker, updateCart, updateFavorite }) => {
    const [good, setGood] = useState(sneaker)

    const handleClick = update => {
        const updatedGood = update === "delete" ? { ...good, addCart: false } : { ...good, addCart: true };
        setGood(updatedGood);
        console.log(updatedGood.id, updatedGood.addCart);
    };


    return ( 
        <div className={styles.item}>
            <div className={styles.item__favorite}>
                {good.isFavorite ? <img src='/public/is-favorite.svg'/> : <img src='/public/notFavorite.svg'/>}
            </div>
            <div className={styles.item__image} style={{
                backgroundImage: `url(${good.image})`
            }} />
            <div className={styles.item__info}>
                <h2 className={styles.info__model}>{good.model}</h2>
                <div className={styles.info__price}>
                    <h3>Цена:</h3>
                    <p>{good.price} руб</p>
                </div>
            </div>
            {good.addCart ? 
                <div className={styles.item__cart}><img src="/public/in_cart.svg" alt="add" onClick={() => handleClick("delete")}/></div> :
                <div className={styles.item__cart}><img src="/public/out_cart.svg" alt="out" onClick={() => handleClick('add')}/></div>
            }
        </div>
    );
}
 
export default Card;