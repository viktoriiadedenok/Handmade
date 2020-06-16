import React from "react";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./vendor/icofont/icofont.min.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./css/style.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Contacts from "./pages/Contacts.jsx";
import Services from "./pages/Services.jsx";
import Basket from "./pages/Basket.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import MainPage from "./pages/MainPage";
import Layout from "./components/Layout";
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/product/:id">
            <ProductPage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/basket">
            <Basket />
          </Route>
          <Route exact path="/MainPage">
            <MainPage />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
