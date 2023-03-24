import { PokerChip } from "@phosphor-icons/react";
import React from "react";
import "./style.css"

const Pokemon = (props) => {
    const { pokemon } = props

    return (
        <div className="card-pokemon">
            <div className="pokemonimg">
                {pokemon.sprites.front_default ? (<img alt={pokemon.name} src={pokemon.sprites.front_default} />)
                :
                (<PokerChip size={80}/>)
                }
            </div>
            <div className="pokemoncardbody">
                <div className="cardbody-top">
                    <h1>{pokemon.name}</h1>
                    {/* <p>{pokemon.id}</p> */}
                </div>
                <div className="cardbody-bottom">
                    <div className="pokemon-type">{pokemon.types.map((type, index) => {
                        const pokemontype = type.type.name;
                        console.log(pokemontype);

                        return (
                            <div key={index} className={`pokemontype-${pokemontype}`}>
                                <p className="font-bold">{pokemontype}</p>
                            </div>
                        )
                    })}</div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;