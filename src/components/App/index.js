import React, { Component } from 'react';
import Cars from './Cars';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      clicked_car: '',
    }
  };

  // fetch cars when component mounts
  componentDidMount() {
    this.getCars();
  }

  // function to fetch cars from the database
  getCars() {
    fetch('http://localhost:3001/cars')
      .then(response => response.json())
      .then(resJSON => this.setState({ cars: resJSON }))
      .catch(error => console.error(error));
  }

  handleClick = (event, car) => {
    console.log('click', car);
    this.setState({
      clicked_car: car,
    })

  }

  render() {
    const { cars, clicked_car } = this.state;
    console.log('render=', clicked_car.image);
    let image_src;
    if (clicked_car) {
      image_src = 'http://localhost:3001/' + clicked_car.image.substring(9);
    }
    console.log('image_src=', image_src);
    return (
      <React.Fragment>
        <div className="car-detail-info">
          <fieldset>
            <legend>
              Car Detail Info
            </legend>

            <div>{clicked_car.model}</div>
            <div>{clicked_car.year}</div>
            <div>{clicked_car.producer}</div>
            <div>{clicked_car.price}</div>
            <div>{clicked_car.owner}</div>
            <div>{clicked_car['tel/mobile']}</div>
            <div>{clicked_car.mileage}</div>
            <div>{clicked_car.registered}</div>
          </fieldset>

          <div className="img_container">
            <img src={image_src} alt="a car" />
          </div>
        </div>

        <div className='cars_with_search'>
          <Cars cars={cars} handleClick={this.handleClick}/>
        </div>
      </React.Fragment>

    )
  }
}

export default App;
