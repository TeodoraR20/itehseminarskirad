import Home from '../components/frontend/Home';
import About from '../components/frontend/About';
import Contact from '../components/frontend/Contact';
import Login from '../components/frontend/auth/Login';
import Register from '../components/frontend/auth/Register';
import ViewCategory from '../components/frontend/collections/ViewCategory';
import ViewProduct from '../components/frontend/collections/ViewProduct';

import ProductDetail from '../components/frontend/collections/ProductDetail';



const Publicrouteslist  = [
    {path: '/' ,exact: true,  name: 'Home', component: Home},
    
    {path: '/about',exact: true,  name: 'About' ,component: About},

    {path: '/contact',exact: true,  name: 'Contact' ,component: Contact},

    {path: '/login',exact: true,  name: 'Login' ,component: Login},
    {path: '/register',exact: true,  name: 'Register' ,component: Register},
    {path: '/collections',exact: true,  name: 'ViewCategory' ,component: ViewCategory},

    {path: '/collections/:slug',exact: true,  name: 'ViewProduct' ,component: ViewProduct},

    {path: '/collections/:category/:product',exact: true,  name: 'ProductDetail' ,component: ProductDetail},

];    

export default Publicrouteslist;