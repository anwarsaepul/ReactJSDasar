import React, { Component } from "react";
// import YouTubeCom from "../../component/YouTubeCom/YouTubeCom";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
// import Product from "../Product/Product";

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
        {/* pengkondisian jika showComponent bernilai true, maka munculkan LifeCycleComp jika false 
        maka tdk muncul */}
        {this.state.showComponent ? <LifeCycleComp /> : null}
      </div>
    );
  }
}

export default Home;
