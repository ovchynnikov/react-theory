import React, {Component} from 'react';
import './App.css';

class App extends Component {
    state = {
      pageTitle: 'React Components'
    }

    handleInput = (event) => {
      this.setState({pageTitle: event.target.value})
    }

  render (){
    return(
      <div className="App">
      <h1> {this.state.pageTitle}</h1>
      <input type="text" onChange={this.handleInput}/>
      
    </div>
    )
    
    }
}

export default App;
