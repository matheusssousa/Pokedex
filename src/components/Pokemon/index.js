import React from "react";
import "./style.css"

const Pokemon = (props) => {
    const { pokemon } = props
    
    return (
        <div className="card-pokemon">
            <div className="pokemonimg">
                <img alt={pokemon.name} src={pokemon.sprites.front_default}/>
            </div>
            <div className="pokemoncardbody">
                <div className="cardbody-top">
                    <h1>{pokemon.name}</h1>
                    {/* <p>{pokemon.id}</p> */}
                </div>
                <div className="cardbody-bottom">
                        <div className="pokemon-type">{pokemon.types.map((type, index) => {
                            return(
                                <div key={index} className={(type.type.name) === "grass" ? "pokemon-typegrass": 
                                `${(type.type.name) === "fire" ? "pokemon-typefire":""}`}>
                                    {type.type.name}
                                </div>
                            )
                        })}</div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;