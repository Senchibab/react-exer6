import React from "react";
import ReactDOM from "react-dom";

let link = "https://via.placeholder.com/";
class Ex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimension: this.props.dimension
    };
    this.out = this.out.bind(this);
  }
  in = () => {
    console.log(parseInt(this.state.dimension));
    this.setState({ dimension: parseInt(this.state.dimension) + 100 });
  };
  out() {
    this.setState({ dimension: parseInt(this.state.dimension) - 100 });
  }
  render() {
    return (
      <div>
        {this.state.dimension}
        <img src={link + this.state.dimension} />
        <button onClick={this.in}>click to zoom image</button>
        <button onClick={this.out}>click to zoom out</button>
      </div>
    );
  }
}
ReactDOM.render(
  <div>
    <Ex dimension="200" />
    <Ex dimension="400" />
  </div>,
  document.getElementById("root")
);
