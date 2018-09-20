import React from 'react'


class Hog extends React.Component {
  render () {
    return (
      <div className="ui eight wide column">
          {this.props.name}
          <img src={require(`../hog-imgs/${this.props.name.replace(/\s+/g, '_').toLowerCase()}.jpg`)}
            onClick={this.props.handleHogClick}/>
      </div>

    )
  }
}

export default Hog
// ${}
