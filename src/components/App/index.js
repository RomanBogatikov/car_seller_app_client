import React, { Component } from 'react';
import Cars from './Cars';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    }
  };

  // fetch cars when component mounts
  componentDidMount() {
    this.getCars();
  }

  getCars() {
    fetch('http://localhost:3001/cars')
      .then(response => response.json())
      .then(resJSON => this.setState({ cars: resJSON }))
      .catch(error => console.error(error));
  }

  render() {
    const { cars } = this.state;
    return (
      <React.Fragment>
        <div className="car-detail-info">

        </div>

        <div className='carslist'>
          <Cars cars={cars}/>
        </div>
      </React.Fragment>

    )
  }
}

export default App;
