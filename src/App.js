import React, { Component } from 'react';


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
      .then(resJSON => console.log(resJSON))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div id="car-detail-info">

      </div>


    )
  }
}

export default App;
