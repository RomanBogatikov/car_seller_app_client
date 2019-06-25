import React, { Component } from 'react';

class Cars extends Component {
  constructor(props) {
    super(props)
    // state for search bar
    this.state = {
      filterTextInput: '',
    }
  }

  handleChange = event => {
    this.setState({
      filterTextInput: event.target.value,
    });
  };


  render() {
    const cars = this.props.cars;
    console.log('cars=', cars);
    return(
      // <div className="cars">
      //   <input value={this.state.filterTextInput} onChange={this.handleChange} placeholder="Search by car model"/>

      //   {cars.map( car => <Car car={car} key={car.id} />)}

      // </div>

      <div className="cars">
        <input value={this.state.filterTextInput} onChange={this.handleChange} placeholder="Search by car model"/>

        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Year</th>
              <th>Producer</th>
              <th>Price</th>
              <th>Mileage</th>
            </tr>
          </thead>
          <tbody>
            {cars.map( car => <Car car={car} key={car.id} />)}
          </tbody>

        </table>
      </div>
    )

  }

}

const Car = (props) => {
  const { car } = props;
  console.log(car);
  return (
    <tr>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.producer}</td>
      <td>{car.price}</td>
      <td>{car.mileage}</td>
    </tr>
  )

}

// class Car extends Component {

// }


export default Cars;
