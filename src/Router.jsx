import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Favorite from './pages/Favorite/Favorite.jsx'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/"></Route>
                <Route element={<Cart />} path="/Cart"></Route>
                <Route element={<Favorite />} path="/Favorite"></Route>
                <Route element={<div>Not Found</div>} path="*"></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router



// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from '../pages/Home'
// import Catalog from '../pages/CatalogPage'
// import AboutUs from '../pages/AboutUs'
// import Profile from '../pages/UserProfile'


// const Router = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route element={<Home />} path="/"></Route>
//                 <Route element={<Catalog />} path="catalog"></Route>
//                 <Route element={<AboutUs />} path="/about_us"></Route>
//                 <Route element={<Profile />} path="/profile"></Route>
//                 <Route element={<div>Not Found</div>} path="*"></Route>
//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default Router