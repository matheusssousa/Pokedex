import { Heart } from "@phosphor-icons/react";
import React from "react";

const Pokemon = (props) => {
    const { pokemon } = props
    
    const onHeartClick = () => {
        console.log("pode favoritar ")
    }
    
    return (
        <div className="card-pokemon">
            <div className="pokemonimg">
                <img alt={pokemon.name} src={pokemon.sprites.front_default} />
            </div>
            <div className="pokemoncardbody">
                <div className="cardbody-top">
                    <h1>{pokemon.name}</h1>
                    <p>{pokemon.id}</p>
                </div>
                <div className="cardbody-bottom">
                        <div>{pokemon.types.map((type, index) => {
                            return(
                                <div key={index} className="pokemon-type">
                                    {type.type.name}
                                </div>
                            )
                        })}</div>
                        <button className="pokemon-heart-btn" onClick={onHeartClick}>
                            <Heart size={22}/>
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;