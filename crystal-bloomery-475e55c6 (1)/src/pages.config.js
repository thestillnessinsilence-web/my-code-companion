import About from './pages/About';
import AdminProductEdit from './pages/AdminProductEdit';
import AdminProducts from './pages/AdminProducts';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';
import Wholesale from './pages/Wholesale';
import Blog from './pages/Blog';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "AdminProductEdit": AdminProductEdit,
    "AdminProducts": AdminProducts,
    "Cart": Cart,
    "Contact": Contact,
    "Events": Events,
    "Home": Home,
    "ProductDetail": ProductDetail,
    "Shop": Shop,
    "Wholesale": Wholesale,
    "Blog": Blog,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};