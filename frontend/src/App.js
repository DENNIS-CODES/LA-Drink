import './App.css';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { useSelector } from 'react-redux';
import ProductScreen from './screen/ProductsScreen';
import ShopScreen from './screen/ShopScreen';
import SigninScreen from './screen/SigninScreen';
import CartScreen from './screen/CartScreen';
import RegisterScreen from './screen/RegisterScreen';
import ProductsScreen from './screen/ProductsScreen';
import logo from './logo.png';
import ShippingScreen from './screen/ShippingScreen';
import PaymentScreen from './screen/PaymentScreen';
import PlaceOrderScreen from './screen/PlaceOrderScreen';
import SellerScreen from './screens/SellerScreen';


function App() {
  const userSignin = useSelector((state) =>state.userSignin);
  const { userInfo } = userSignin;
  return (
    <BrowserRouter>
  <div className="App">
    <header className="header">
      <section className="nav">
			<div className="logo-image">
				<Link className="navbar-brand" href="/"><img src= {logo} alt="logo" className="img-fluid"/></Link>
        <a href="cart.html">Cart</a>
        {
          userInfo ? <Link to="profile">{userInfo.name}</Link>:
         <Link to="/signin">Sign in</Link> 
        }
        
        
  <ul className="main-nav-links">
    <li><Link to = "/ShopScreen" className="button">Shop</Link></li>
    <li><Link to ="/vodka" className="button">Vodka</Link></li>
    <li><Link to ="/Beer" className="button">Beer</Link></li>
    <li><Link to ="/wine" className="button">Wine</Link></li>
    <li><Link to ="/ram" className="button">Ram</Link></li>
    <li><Link to ="/contacts" className="button">Contacts</Link></li>

  </ul>
  </div>
</section>
 {/*</section> ODER NOW BUTTON/SLOGAN */}
  <section>
        <div className="hero">
    <h1>⭐Oder your favorite liqour because!⁂</h1>
    <p>※Sober is Boring!🍻</p>
    <div className="btn-container">
      <a href="#!menu" className="order-now">Order Now</a>
    </div>
    
  </div>
  </section>
  </header> 
  
 {/*</section>PRODUCT BODY*/}
  <main className="main">
    <div className="content">
    <Route path="/seller/:id" component={SellerScreen}></Route>
      <Route path= "/profile" component={ProfileScreen}></Route>
      <Route path= "/signin"  component={SigninScreen}></Route>
      <Route path= "/products"  component={ProductsScreen}></Route>
      <Route path= "/register"  component={RegisterScreen}></Route>
      <Route path="/shipping" components={ShippingScreen}></Route>
      <Route path="/payment" components={PaymentScreen}></Route>
      <Route path="/placeorder" components={PlaceOrderScreen}></Route>
      <Route path="/products/:_id" component={ProductScreen}></Route>
      <Route path="/ShopScreen" exact={true} component={ShopScreen} />
      <Route path="/" exact={true} component={ShopScreen} />
      <Route path="/cart/:id?"  component={CartScreen} />
          </div>
 
  </main>
  
  
 {/* Footer */}
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Footer Content
            </h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center py-3">
        <ul className="list-unstyled list-inline mb-0">
          <li className="list-inline-item">
            <h5 className="mb-1">Register for free</h5>
          </li>
          <li className="list-inline-item">
            <a href="#signUp" className="btn btn-danger btn-rounded">
              Sign up!
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1">
              <i className="fab fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  </div>
  </BrowserRouter>  
  );
}

export default App;
