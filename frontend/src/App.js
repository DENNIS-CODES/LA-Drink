import './App.css';

function App() {
  return (
		<section className="nav">
			<div className="logo-image">
				<a className="navbar-brand" href="#!">
					<img src="images/logo.png" className="img-fluid"/>
          </a>
  <ul className="main-nav-links">
    <li><a href="#" className="button">Shop</a></li>
    <li><a href="#" className="button">Vodka</a></li>
    <li><a href="#" className="button">Beer</a></li>
    <li><a href="#" className="button">Wine</a></li>
    <li><a href="#" className="button">Ram</a></li>
    <li><a href="#" className="button">Contacts</a></li>
  </ul>
  </div>
</section>
  {/* ODER NOW BUTTON/SLOGAN */}
  <section>
        <div className="hero">
    <h1>⭐Oder your favorite liqour because!⁂</h1>
    <p>※Sober is Boring!🍻</p>
    <div className="btn-container">
      <a data-tab-target="#menu" className="order-now">Order Now</a>
    </div>
  </div>
  </section>
  {/*PRODUCT BODY */}
  <main className="main">
    <div className="content">
      <ul className="products">
        <li>
          <div className="product">
            <img src="images/4th-Street-Red.jpeg" className="product-image"/>
            <div className="product-name"><a href="product.html">Fourth Street</a></div>
            <div className="product-brand">Wine</div>
            <div className="product-price">Ksh999</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
            </li>
            <li>
          <div className="product">
            <img src="images/4th-Street-Red.jpeg" className="product-image"/>
            <div className="product-name"><a href="product.html">Fourth Street</a></div>
            <div className="product-brand">Wine</div>
            <div className="product-price">Ksh999</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
            </li>
            <li>
          <div className="product">
            <img src="images/4th-Street-Red.jpeg" className="product-image"/>
            <div className="product-name"><a href="product.html">Fourth Street</a></div>
            <div className="product-brand">Wine</div>
            <div className="product-price">Ksh999</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
            </li>
            <li>
          <div className="product">
            <img src="images/4th-Street-Red.jpeg" className="product-image"/>
            <div className="product-name"><a href="product.html">Fourth Street</a></div>
            <div className="product-brand">Wine</div>
            <div className="product-price">Ksh999</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
            </li>
            <li>
          <div className="product">
            <img src="images/4th-Street-Red.jpeg" className="product-image"/>
            <div className="product-name"><a href="product.html">Fourth Street</a></div>
            <div className="product-brand">Wine</div>
            <div className="product-price">Ksh999</div>
            <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
            </li>
            <li>
          <div className="product">
            <img src="images/4th-Street-Red.jpeg" className="product-image"/>
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
<footer className="page-footer font-small stylish-color-dark pt-4">
  <div className="container text-center text-md-left">
    <div className="row">
      <div className="col-md-4 mx-auto">
         <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>
          </div>
      {/* Grid column */}
      <hr className="clearfix w-100 d-md-none"/>
      {/* Grid column */}
      <div className="col-md-2 mx-auto">
        {/* Links */}
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
        <ul className="list-unstyled">
          <li><a href="#!">Link 1</a></li>
          <li><a href="#!">Link 2</a></li>
          <li><a href="#!">Link 3</a></li>
          <li><a href="#!">Link 4</a></li>
        </ul>
        </div>
      {/* Grid column */}
      <hr className="clearfix w-100 d-md-none"/>
      {/* Grid column */}
      <div className="col-md-2 mx-auto">
        {/* Links */}
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
        <ul className="list-unstyled">
          <li><a href="#!">Link 1</a></li>
          <li><a href="#!">Link 2</a></li>
          <li><a href="#!">Link 3</a></li>
          <li><a href="#!">Link 4</a></li>
        </ul>
        </div>
      {/* Grid column */}
      <hr className="clearfix w-100 d-md-none"/>
      {/* Grid column */}
      <div className="col-md-2 mx-auto">
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
        <ul className="list-unstyled">
          <li><a href="#!">Link 1</a></li>
          <li><a href="#!">Link 2</a></li>
          <li><a href="#!">Link 3</a></li>
          <li><a href="#!">Link 4</a></li>
        </ul>
        </div>
      </div>
    </div>
  {/* Footer Links */}
  <hr>
  <ul className="list-unstyled list-inline text-center py-2">
    <li className="list-inline-item"><h5 className="mb-1">Register for free</h5></li>
    <li className="list-inline-item"><a href="#!" className="btn btn-danger btn-rounded">Sign up!</a></li>
  </ul>
  </hr>
  {/* Social buttons */}
  <ul className="list-unstyled list-inline text-center">
    <li className="list-inline-item">
      <a className="btn-floating btn-fb mx-1">
        <i className="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-tw mx-1">
        <i className="fab fa-twitter"></i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-gplus mx-1">
        <i className="fab fa-google-plus-g"></i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-li mx-1">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-dribbble mx-1">
        <i className="fab fa-dribbble"></i>
      </a>
    </li>
  </ul>
  {/* Copyright */}
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/">LA-Drinks.com</a>
    </div>
</footer>
);
}
export default App;
