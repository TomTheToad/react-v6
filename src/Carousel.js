import { Component } from "react";

export class Carousel extends Component {
  state = {
    active: 0
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
  }

  handleIndexClick= (event) => {
    this.setState({
      active: +event.target.dataset.index
    });
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;
    
    return (
    <div className="carousel">
      <img src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <img 
            key = {photo}
            src={photo}
            data-index={index}
            onClick={this.handleIndexClick}
            className={ index === active ? "active" : ""}
            alt = "animal thumbnail"
          />
        ))}
      </div>
    </div>
    );
  }
}