// Libraries
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";

// Pages
import BlogPost from "../Pages/BlogPost/BlogPost";
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
import Product from "../Pages/Product/Product";
import YoutubeCompPage from "../Pages/YoutubeCompPage/YoutubeCompPage";

// Style
import "./Home.css";

class Home extends Component {
  state = {
    showComponent: true,
  };
  render() {
    return (
      <Router>
        <Fragment>
          <div className="navigation">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecycle">LifeCycle</Link>
            <Link to="/youtubecom">Youtube</Link>
          </div>
          <Route exact path="/">
            <BlogPost />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/lifecycle">
            <LifeCycleComp />
          </Route>
          <Route path="/youtubecom">
            <YoutubeCompPage />
          </Route>
        </Fragment>
      </Router>
    );
  }
}

export default Home;
