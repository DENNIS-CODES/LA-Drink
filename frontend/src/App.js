import './App.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
function App() {
  return (
  <div classNameName="App">
    <header classNameName="header">
      <section className="nav">
			<div className="logo-image">
				<a className="navbar-brand" href="/"><img src= {require (."./images/logo.png")} alt="logo" className="img-fluid"/></a>
  <ul className="main-nav-links">
    <li><a href="#!" className="button">Shop</a></li>
    <li><a href="#!" className="button">Vodka</a></li>
    <li><a href="#!" className="button">Beer</a></li>
    <li><a href="#!" className="button">Wine</a></li>
    <li><a href="#!" className="button">Ram</a></li>
    <li><a href="#!" className="button">Contacts</a></li>

  </ul>
  </div>
</section>
 {/*</section> ODER NOW BUTTON/SLOGAN */}
  <section>
        <div className="hero">
    <h1>⭐Oder your favorite liqour because!⁂</h1>
    <p>※Sober is Boring!🍻</p>
    <div className="btn-container">
      <a data-tab-target="#!menu" className="order-now">Order Now</a>
    </div>
    
  </div>
  </section>
  </header> 
  
 {/*</section>PRODUCT BODY*/}
  <main className="main">
    <div className="content">
      <ul className="products">
        <li>
          <div className="product">
            <img src= {require("./images/4th-Street-Red.jpeg")} className="product-image"/>
            <div className="product-name"><a href="product.html">Fourth Street</a></div>
            <div className="product-brand">Wine</div>
            <div className="product-price">Ksh999</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
            </li>
            <li>
          <div className="product">
            <img src= {require("./images/4th-Street-Red.jpeg")} className="product-image" alt="products-img"/>
            <div className="product-name"><a href="product.html">Fourth Street</a></div>
            <div className="product-brand">Wine</div>
            <div className="product-price">Ksh999</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
            </li>
            <li>
          <div className="product">
            <img src= {require("./images/4th-Street-Red.jpeg")} className="product-image" alt="product-img"/>
            <div className="product-name"><a href="product.html">Fourth Street</a></div>
            <div className="product-brand">Wine</div>
            <div className="product-price">Ksh999</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
            </li>
            <li>
          <div className="product">
            <img src= {require("./images/4th-Street-Red.jpeg")} className="product-image" alt="product-img"/>
            <div className="product-name"><a href="product.html">Fourth Street</a></div>
            <div className="product-brand">Wine</div>
            <div className="product-price">Ksh999</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
            </li>
            <li>
          <div className="product">
            <img src= {require("./images/4th-Street-Red.jpeg")} className="product-image" alt="product-img"/>
            <div className="product-name"><a href="product.html">Fourth Street</a></div>
            <div className="product-brand">Wine</div>
            <div className="product-price">Ksh999</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
            </li>
            <li>
          <div className="product">
            <img src= {require("./images/4th-Street-Red.jpeg")} className="product-image" alt="product-img"/>
            <div className="product-name"><a href="product.html">Fourth Street</a></div>
            <div className="product-brand">Wine</div>
            <div className="product-price">Ksh999</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
            </li>
          </ul>
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
            <a href="#!" className="btn btn-danger btn-rounded">
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
  );
}

export default App;