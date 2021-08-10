import React, { useEffect } from "react";
import Header from "./Header";
import "./App.css";
import "./Header.css";
import Home from "./Home";
import Payment from "./Payment";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JMb0kDT6pBvzpYLhFBUZNQsobzSWpK7k20pOoXxsOwHQ5YEyW9KfsqvEc7POLU2IRMsP3IJ4FNC63WOkl8G0Kgr00gQr69dFl"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run when the app component loads........
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        //user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
