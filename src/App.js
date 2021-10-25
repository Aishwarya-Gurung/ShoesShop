import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import adminLogin from './components/AdminWork/AdminLogin';
import product from './components/AdminWork/Product'
import addProduct from './components/AdminWork/AddProduct'
import addCategory from './components/AdminWork/AddCategory'
import updateProduct from './components/AdminWork/UpdateProduct'
import home from './components/HomePage/home';
import register from './components/CustomerRegister/Register'
import login from './components/CustomerRegister/Login';
import myAccount from './components/CustomerRegister/MyAccount'

import card from './components/CategoryPage/Card'
import men from './components/CategoryPage/Men'
import women from './components/CategoryPage/Women'
import search from './components/CategoryPage/Search'
import shipping from './components/CategoryPage/Shipping'
import myCart from './components/CategoryPage/MyCart'
import singlePage from './components/CategoryPage/SinglePage'
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <switch>
        <Route path="/admin" component={adminLogin} />
        <Route path="/product" component={product} />
        <Route path="/addCategory" component={addCategory} />
        <Route path="/addProduct" component={addProduct} />
        <Route path="/updateProduct" component={updateProduct} />
        <Route exact path="/" component={home} />
        <Route path="/register" component={register} />
        <Route path="/login" component={login} />
        <Route path="/myAccount" component={myAccount} />
        <Route path="/card" component={card} />
        <Route exact path="/men" component={men} />
        <Route exact path="/women" component={women} />
        <Route path="/search" component={search} />
        <Route path="/shipping" component={shipping} />
        <Route path="/myCart" component={myCart} />
        <Route path="/singlePage" component={singlePage} />
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
