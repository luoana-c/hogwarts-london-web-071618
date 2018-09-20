import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList'
import HogDetails from './HogDetails'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: hogs,
      selectedHog: '',
      filterByGreased: false
    }
  }

  changeFilter = () => {
    this.setState({filterByGreased: !this.state.filterByGreased})
  }
  handleHogClick = (hog) =>{
    this.setState({selectedHog: hog})
  }

  render() {
    return (
      <div className="App">
          < Nav />
        {this.state.selectedHog ? <HogDetails selectedHog={this.state.selectedHog}/> : null}
        < HogList hogs={this.state.hogs}
          handleHogClick={this.handleHogClick}
          changeFilter={this.changeFilter}
          filterByGreased={this.state.filterByGreased}
          />

      </div>
    )
  }
}

export default App;
