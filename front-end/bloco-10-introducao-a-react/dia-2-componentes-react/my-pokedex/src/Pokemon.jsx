import React, { Component } from "react";

class Pokemon extends Component {
  render () {
    const { pokemon: { name, type, averageWeight, image, moreInfo} } = this.props;

    return(
      <div className="pokemon">
        <div>
          <p> { name } </p>
          <p> { type }</p>
          <p> { `AverageWeight: ${averageWeight.value} ${averageWeight.measurementUnit}` }</p>
        </div>
        <img src={ image } alt={ `${name} sprite`} />
        <a href={ moreInfo } target="_blank">know more</a>

      </div>
    )
  }
}

export default Pokemon