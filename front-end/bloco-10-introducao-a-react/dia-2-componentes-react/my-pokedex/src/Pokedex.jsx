import React, { Component } from "react"
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render () {
    const { pokemons } =  this.props;

    return(
      <div className="pokedex">
        {pokemons.map(elemen => <Pokemon key={elemen.id} pokemon={elemen} />)}
      </div>
    )
  }
}

export default Pokedex;