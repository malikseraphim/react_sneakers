import styles from './App.module.scss'
import Header from './components/Header/Header'
import Router from './Router';

const App = () => {
  return ( 
    <div className={styles.wrapper}>
      <Header />
      <main><Router /></main>
    </div>
   );
}
 
export default App;
