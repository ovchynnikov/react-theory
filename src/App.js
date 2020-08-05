import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {
    state = {
      cars: [
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2013},
        {name: 'BMW', year: 2015},
      ],
      pageTitle: 'React Components',
      showCars: false
    }


    handleInput = (event) => {
      this.setState({pageTitle: event.target.value})
    }

    toggleCarsHandler = () => {
      this.setState({
        showCars: !this.state.showCars
      })
    }

    onChangeName(name, index) {
      const car = this.state.cars[index];
      car.name = name;
      const cars = [...this.state.cars];
      cars[index] = car;
      this.setState({cars: cars})
    }

    deleteHandler(index) {
      const cars = this.state.cars.concat();
      cars.splice(index, 1);

      this.setState({cars: cars})

    }

  render (){

      let cars = null 

      if (this.state.showCars){
        cars = this.state.cars.map((car, index) => {
          return (
            <Car 
            key={index} 
            name={car.name} 
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)} 
            onChangeName={(event) => this.onChangeName(event.target.value, index)}/>
           )
         })
      }


    return(
      <div className="App">
      <h1> {this.state.pageTitle}</h1>

      <button onClick={this.toggleCarsHandler }>Toggle cars</button>

      <input type="text" onChange={this.handleInput}/>

      { cars }
      
    </div>
    )
    
    }
}

export default App;
