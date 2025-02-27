import React, { Component } from "react";
import "./Foodbox.css";

class Foodbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity
    };
    console.log(JSON.stringify(props));
  }

  handleQuantities = e => {
    this.setState({ quantity: e.target.value });
  };

  render() {
    return (
      // TODO: key is undefined here.
      <div key={this.props.key} className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="quantity"
                  value={this.state.quantity}
                  onChange={this.handleQuantities}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={e => {
                    this.props.theAddFunction(
                      e,
                      this.state.quantity,
                      this.props.calories,
                      this.props.name
                    );
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Foodbox;
