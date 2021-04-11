import React, { Component } from "react";
// import YouTubeCom from "../../component/YouTubeCom/YouTubeCom";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
// import Product from "../Product/Product";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <p>YouTube Component</p>
          <hr/>
        <YouTubeCom 
            time="6.7" 
            title="ABC"
            desc="Lorem Abc..."/>
        <YouTubeCom 
            time="7.8"
            desc="Lorem Ipsum..."/>
        <YouTubeCom 
            time="8.9" 
            title="CDE"
            desc="Lorem Cde..."/>
        <YouTubeCom 
            time="9.10" 
            title="DEF"/>
        <YouTubeCom 
            title="EFG"
            desc="Lorem Efg..."/> */}
        {/* <p>Counter</p>
        <hr />
        <Product /> */}

        <p>LifeCycle Component</p>
        <hr />
        <LifeCycleComp />
      </div>
    );
  }
}

export default Home;
