import React, { Component } from "react";
import "./LifeCycleComp.css";

class LifeCycleComp extends Component {
    // Mounting     => Ketika komponent pertama di pasang
    // Updating     => Ketika komponent diupdate
    // Upmounting   => Ketika komponent diCOPOT/hilang
    // lifecycle pertama
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        };
        console.log("Construktor");
    }
    // lifecycle ke 2
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        return null;
    }
    // lifecycle ke 3(render)
    // lifecycle ke 4(component didmount)
    componentDidMount() {
        console.log("component DidMount")
        // setTimeout(() => {
        //     this.setState({
        //         count: 7
        //     })
        // }, 3000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group("shouldComponentUpdate");
        // console.log("nextProps :", nextProps);
        console.log("nextState :", nextState);
        console.log("this state", this.state);
        console.groupEnd();
        // ketika count nextState lebih dari 4
        if(nextState.count > 4){
            // jgn lanjutkan perintah
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    changeCount = () => {
        this.setState ({
            count: this.state.count + 1
        })
    }

    render() {
        console.log("render");
        return <button onClick={this.changeCount} className="btn">LifeCycle Compobent {this.state.count}</button>;
    }
}

export default LifeCycleComp;
