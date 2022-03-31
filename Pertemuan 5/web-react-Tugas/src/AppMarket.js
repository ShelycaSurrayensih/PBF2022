import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import fayyaza_dress from "./img/FAYYAZA DRESS.jpg";
import rainna_midi from "./img/rainna midi.jpg";
import palmela_stripe from "./img/PALMELA STRIPE.jpg";
import tas1 from "./img/tas1.jpg";
import tas2 from "./img/tas2.jpg";
import tas3 from "./img/tas3.jpg";
import LATINKA from "./img/LATINKA.jpg";
import basic_mukena from "./img/BASIC MUKENA.jpg";
import mirrania from "./img/MIRRANIA.jpg";

export default function MarketplaceExample() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          ghealsyshoesid
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <AuthButton />
            </form>
          </div>
        </div>
      </nav>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <ShopRoute path="/shop">
            <ShopPage />
          </ShopRoute>
        </Switch>
        <footer className="page-footer font-small blue"></footer>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function AuthButton() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  return fakeAuth.isAuthenticated ? (
    <button
      className="btn btn-light"
      onClick={() => {
        fakeAuth.signout(() => history.push(from));
      }}
    >
      Log out
    </button>
  ) : (
    <span className="text-light">You are not logged in.</span>
  );
}

function ShopRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function HomePage() {
  return (
    <div className="container-fluid">
      <h3 className="my-3">This is the home page</h3>
      <Link className="nav-link" to="/shop">
        <button className="btn btn-dark">Go to shop</button>
      </Link>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="container-fluid">
      <h1 className="ghealsy">ghealsyshoesid </h1>
      <h4 className="mt-3">PREMIUM LOCAL BRAND</h4>
      <h5 className="my-3">Shopping & retail</h5>
      <h5 className="my-3">📍Jalan Raya Jetis no 19 A Malang</h5>
      <h5 className="my-3">📍 Jalan sunan kalijaga no 8 A Malang</h5>
      <h5 className="my-3">📍Jalan diponegoro 56 Batu</h5>
      <a href="https://www.instagram.com/ghealsyshoesid/">@ghealsykosme_id</a>
    </div>
  );
}

function ShopPage() {
  return (
    <Router>
      <div className="container">
        <h2 className="my-3">Welcome!</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/ramadhan-coll">RAMADHAN COLL VOL 02</Link>
          </li>
          <li className="list-group-item">
            <Link to="/bag">TAS</Link>
          </li>
          <li className="list-group-item">
            <Link to="/mukena">MUKENA</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/RAMADHAN-COLL">
            <RAMADHANCOLL />
          </Route>
          <Route path="/bag">
            <TAS />
          </Route>
          <Route path="/mukena">
            <Shoe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <div className="container-fluid">
      <h3 className="my-3">
        You must log in to view the page at {from.pathname}
      </h3>
      <button className="btn btn-dark" onClick={login}>
        Log in
      </button>
    </div>
  );
}

function RAMADHANCOLL() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2 className="my-3">RAMADHAN COLL VOL 02</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/Kode : rainna midi, Bahan : linen rubia, Ukuran : all size LD 110, Harga : 109.000`}>
              <div className="card-body text-center">
                <img
                  src={rainna_midi}
                  alt="RAINNA MIDI"
                  className="productimg mb-4"
                />
                <h5 className="card-title">RAINNA MIDI</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
          <Link
              className="col-sm column productbox"
              to={`${url}/Kode : PALMELA STRIPE MAXI, Bahan : airflow, Harga : 123.000`}>
              <div className="card-body text-center">
                <img
                  src={palmela_stripe}
                  alt="PALMELA STRIPE"
                  className="productimg mb-4"
                />
                <h5 className="card-title">PALMELA STRIPE MAXI</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/ KODE : FAYYAZA DRESS, BAHAN : VOXY, UKURAN : LD : 100, P baju 120 cm, HARGA : 59.000`}>
              <div className="card-body text-center">
                <img
                  src={fayyaza_dress}
                  alt="humaira dress basic"
                  className="productimg mb-4"
                />
                <h5 className="card-title">FAYYAZA DRESS</h5>
              </div>
            </Link>

          </div>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <h4 className="text-center my-3">
            Choose a Dress image for details and prices!
          </h4>
        </Route>
        <Route path={`${path}/:productId`}>
          <RAMADHANCOLLs />
        </Route>
      </Switch>
    </div>
  );
}

function RAMADHANCOLLs() {
  let { productId } = useParams();
  return (
    <div>
      <h4 className="text-center my-3">{productId}</h4>
    </div>
  );
}

function TAS() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2 className="my-3">TAS</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/NUDE BAG SERIES, 41, Rp.55.000`}
            >
              <div className="card-body text-center">
                <img
                  src={tas1}
                  alt="NUDE BAG SERIES"
                  className="productimg mb-4"
                />
                <h5 className="card-title">NUDE BAG SERIES</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/LEONY BEHEL, 43, Rp37.000`}
            >
              <div className="card-body text-center">
                <img
                  src={tas3}
                  alt="LEONY BEHEL"
                  className="productimg mb-4"
                />
                <h5 className="card-title">LEONY BEHEL</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/SCARLET EMBOSS BAG, 42, Rp39.000`}
            >
              <div className="card-body text-center">
                <img
                  src={tas2}
                  alt="SCARLET EMBOSS BAG"
                  className="productimg mb-4"
                />
                <h5 className="card-title">SCARLET EMBOSS BAG</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <h4 className="text-center my-3">
            Choose a Bag image for details and prices!
          </h4>
        </Route>
        <Route path={`${path}/:productId`}>
          <TASs />
        </Route>
      </Switch>
    </div>
  );
}

function TASs() {
  let { productId } = useParams();
  return (
    <div>
      <h4 className="text-center my-3">{productId}</h4>
    </div>
  );
}

function Shoe() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2 className="my-3">Mukena</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/BASIC MUKENA, Rp85.000`}
            >
              <div className="card-body text-center">
                <img
                  src={basic_mukena}
                  alt="BASIC MUKENA"
                  className="productimg mb-4"
                />
                <h5 className="card-title">BASIC MUKENA</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/LATINKA, Rp120.000`}
            >
              <div className="card-body text-center">
                <img
                  src={LATINKA}
                  alt="LATINKA"
                  className="productimg mb-4"
                />
                <h5 className="card-title">LATINKA</h5>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <Link
              className="col-sm column productbox"
              to={`${url}/MIRRANIA, Rp160.000`}
            >
              <div className="card-body text-center">
                <img
                  src={mirrania}
                  alt="MIRRANIA"
                  className="productimg mb-4"
                />
                <h5 className="card-title">MIRRANIA</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path={path}>
          <h4 className="text-center my-3">
            Choose a mukena image for details and prices!
          </h4>
        </Route>
        <Route path={`${path}/:productId`}>
          <Shoes />
        </Route>
      </Switch>
    </div>
  );
}

function Shoes() {
  let { productId } = useParams();
  return (
    <div>
      <h4 className="text-center my-3">{productId}</h4>
    </div>
  );
}
