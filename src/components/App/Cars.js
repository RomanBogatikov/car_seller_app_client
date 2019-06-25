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

    const filteredList = this.props.cars.filter( car => car.model.toLowerCase().startsWith(this.state.filterTextInput.toLowerCase()));

    console.log('cars=', this.props.cars);
    console.log('props in cars=', this.props);
    return(

      <React.Fragment>
        <div className="search">
          <input value={this.state.filterTextInput} onChange={this.handleChange} placeholder="Search by car model" type="text" />
        </div>

        <div className="cars">

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
              {filteredList.map( car => <Car car={car} key={car._id} handleClick={this.props.handleClick} />)}
            </tbody>

          </table>

        </div>
      </React.Fragment>
    )

  }

}

const Car = (props) => {
  const { car } = props;
  return (
    <tr onClick={event => props.handleClick(event, car)}>
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
