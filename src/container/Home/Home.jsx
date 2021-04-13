import React, { Component, Fragment } from "react";
import BlogPost from "../BlogPost/BlogPost";
// import YouTubeCom from "../../component/YouTubeCom/YouTubeCom";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import Product from "../Product/Product";
import { BrowserRouter as Router, Route, Link, BrowserRouter, } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  state = {
    showComponent: true,
  };
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       showComponent: false,
  //     })
  //   }, 5000);
  // }
  render() {
    return (
      <BrowserRouter>
        {/* <div>
          <p>YouTube Component</p>
          <hr />
          <YouTubeCom time="6.7" title="ABC" desc="Lorem Abc..." />
          <YouTubeCom time="7.8" desc="Lorem Ipsum..." />
          <YouTubeCom time="8.9" title="CDE" desc="Lorem Cde..." />
          <YouTubeCom time="9.10" title="DEF" />
          <YouTubeCom title="EFG" desc="Lorem Efg..." />
          <p>Counter</p>
          <hr />
          <Product />
          <p>LifeCycle Component</p>
          <hr /> */}
        {/* pengkondisian jika showComponent bernilai true, maka munculkan LifeCycleComp jika false maka tdk muncul */}
        {/* {this.state.showComponent ? <LifeCycleComp /> : null}
          <p>Blog Post</p>
          <hr />
          <BlogPost />
        </div> */}
        {/* <Switch> */}
          {/* <Route path="/" component={BlogPost} /> */}
          {/* <Route path="/">
            <BlogPost />
          </Route>
          <Route path="/product">
            <Product />
          </Route> */}
          {/* <Route path="/product" Component={Product} /> */}
          {/* <Route path="/lifecycle" component={LifeCycleComp} />  */}

          <Fragment>
            <div className="navigation">
              <Link to="/">Home</Link>
              <Link to="/product">Product</Link>
              <Link to="/lifecycle">LifeCycle</Link>
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
        </Fragment>
        {/* </Switch> */}
      </BrowserRouter>
    );
  }
}

export default Home;
