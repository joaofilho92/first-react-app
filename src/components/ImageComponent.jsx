import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return <img width={this.props.width} height={this.props.height} src={this.props.url} alt={this.props.alt} />;
  }
}

export default ImageComponent;