
import styles from './Home.module.scss';
import Card from '/src/components/Card/Card.jsx';
import { sneakers } from '/src/data.js';
import { useState, useEffect } from 'react';

const Home = () => {
    const [goods, setGoods] = useState(sneakers);
    const [goodsInCart, setGoodsInCart] = useState([]);
    const [goodsFavorites, setGoodsFavorites] = useState([]);

    useEffect(() => {
        console.log("App render");
    }, []);

    // Добавление товара в корзину 
    const updateGoodInCart = updateGood => {
        const addWillGood = goods.find(good => good.id === goodId); 
        console.log(typeUpdate)
        setGoodsInCart(prev => [...prev, addWillGood]);
    };

    // useEffect(() => {
    //     console.log("Updated goods in cart:", goodsInCart);
    // }, [goodsInCart]); 

    // Добавление товара в список желаемых
    const updateGoodInFavorite = goodId => {
        const addWillGood = goods.find(good => good.id === goodId);
        setGoodsFavorites(prev => [...prev, addWillGood]);
    };

    // useEffect(() => {
    //     console.log("Updated goods in favorites", goodsFavorites);
    // }, [goodsFavorites]);

    return ( 
        <section className={styles.section__home}>
            <div className={styles.main__search}>
                <h2 className={styles.search__title}>Все кроссовки</h2>
                <input type="text" placeholder='Поиск...' />
            </div>
            <div className={styles.main__catalog}>
                {goods.map(item => (
                    <Card sneaker={item} key={item.id} updateCart={updateGoodInCart} updateFavorites={updateGoodInFavorite}/>
                ))}
            </div>
        </section>
    );
};

export default Home;
