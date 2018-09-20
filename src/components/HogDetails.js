import React from 'react'


class HogDetails extends React.Component {
  render () {
    return (
      <div >
        <h2>{this.props.selectedHog.name}</h2>
        <h3>Specialty: {this.props.selectedHog.specialty}</h3>
        <h3>Weight:
          {this.props.selectedHog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h3>
        <h3>Highest medal achieved: {this.props.selectedHog['highest medal achieved']}</h3>
        <h3>{this.props.selectedHog.greased ? "Is Greased" : "Needs greasing"}</h3>
      </div>

    )
  }
}

export default HogDetails
