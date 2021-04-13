import React, { Component } from "react";
import "../Product.css";
import bg from "../../../../assets/bg.jpg";

class CardProduct extends Component {
    state = {
        order: 4,
    };

    //   methode handleCounterChange menerima data baru (newValue)
    handleCounterChange = (newValue) => {
        // lalu mengirimkan data tersebut ke onCounterChange
        this.props.onCounterChange(newValue)
    }

    // ketika function plus dijalankan lakukan
    handlePlus = () => {
        // perubahan state pada
        this.setState({
            // state order dgn menambah + 1
            order: this.state.order + 1,
        }, () => {
            // kemudian kirim nilai terupdate ke methode handleCounterChange
            this.handleCounterChange(this.state.order);
        });
    };

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1,
            }, () => {
                // kemudian kirim nilai terupdate ke methode handleCounterChange
                this.handleCounterChange(this.state.order);
            });
        }
    };

    render() {
        return (
            <div className="card">
                <div className="img-tumb-prod">
                    <img src={bg} alt=""></img>
                </div>
                <p className="product-title">Laptop</p>
                <p className="product-price">Rp 5.000.000</p>
                <div className="counter">
                    {/* Ketika tombol minus di klik, jalankan fungsi handleMinus*/}
                    <button className="minus" onClick={this.handleMinus}> - </button>
                    {/* ambil nilai dari state order */}
                    <input type="text" value={this.state.order} />
                    {/* Ketika tombol plus di klik, jalankan fungsi handleMinus*/}
                    <button className="plus" onClick={this.handlePlus}> + </button>
                </div>
            </div>
        );
    }
}

export default CardProduct;
