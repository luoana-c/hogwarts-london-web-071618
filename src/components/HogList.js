import React from 'react'
import Hog from './Hog'

class HogList extends React.Component {
  render () {
    return (
      <div className="ui grid container">
        <span><button onClick={this.props.changeFilter}>Display only greased hogs</button></span>


        {this.props.filterByGreased ?
          this.props.hogs
            .filter(hog => hog.greased === true)
              .map(hog =>
                <Hog name={hog.name}
                  handleHogClick={() => this.props.handleHogClick(hog)}
                />)
                :
          this.props.hogs
          .map(hog =>
            <Hog name={hog.name}
              handleHogClick={() => this.props.handleHogClick(hog)}
            />)
        }
      </div>

    )
  }
}

export default HogList
