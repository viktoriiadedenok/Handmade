import React from "react";
import "./css/style.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./vendor/icofont/icofont.min.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import ProductItem from "./pages/ListOfPages.jsx";
import About from "./pages/FirstPage/About.jsx";
import Contacts from "./pages/FirstPage/Contacts.jsx";
import MainPage from "./MainPage.jsx";
import Services from "./pages/FirstPage/Services.jsx";
import Works from "./pages/FirstPage/Works.jsx";
import WorkSingle from "./pages/FirstPage/Work-single.jsx";
function App() {
  return (
    <BrowserRouter>
      <MainPage />
      {/* <NavLink to="/mainPage">Main Page</NavLink> */}
      <div className="app-wrapper">
        {/* <Route path="/mainPage" component={MainPage} /> */}
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/services" component={Services} />
        <Route path="/works" component={Works} />
        <Route path="/workSingle" component={WorkSingle} />
      </div>
    </BrowserRouter>
  );
}

export default App;
