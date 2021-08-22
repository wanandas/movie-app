import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./component/Navbar/Navbar";
import CartPage from "./pages/Cart/CartPage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
