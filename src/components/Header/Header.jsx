import styles from './Header.module.scss'

const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.header__container}>
                <a className={styles.header__logo} href='/'>
                    <div className={styles.logo__image}><img src="/src/assets/header-images/logo.svg" alt="LOGO" /></div>
                    <div className={styles.logo__title}>
                        <h1>REACT SNEAKERS</h1>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </a>
                <nav className={styles.header__menu}>
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}>
                            <div className={styles.link__image}><img src="/src/assets/header-images/cart.svg" alt="" /></div>
                            <a href="/Cart" className={styles.menu__link}>0 руб.</a>
                        </li>
                        <li className={styles.menu__item}>
                            <div className={styles.link__image}><img src="/src/assets/header-images/favorite.svg" alt="" /></div>
                            <a href="/Favorite" className={styles.menu__link}>Закладки</a>
                        </li>
                        <li className={styles.menu__item}>
                            <div className={styles.link__image}><img src="/src/assets/header-images/profile.svg" alt="" /></div>
                            <a href="/" className={styles.menu__link}>Профиль</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
     );
}
 
export default Header;