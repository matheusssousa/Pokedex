import { PokerChip } from "@phosphor-icons/react";
import React, { useState } from "react";
import Modal from "../Modal";
import "./style.css"

const Pokemon = (props) => {
    const { pokemon } = props
    const [showModal, setShowModal] = useState(false)
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemon.id}.png`;

    const handlerShowModal = () => {
        setShowModal(true)
    }

    console.log(showModal)

    return (
        <div className="card-pokemon" onClick={handlerShowModal}>
            <div className="pokemonimg">
                {pokemon.sprites.front_default ? (<img alt={pokemon.name} src={imgUrl} />)
                    :
                    (<PokerChip size={80} />)
                }
            </div>
            <div className="pokemoncardbody">
                <div className="cardbody-top">
                    <h1>{pokemon.name}</h1>
                    {/* <p>{pokemon.id}</p> */}
                </div>
                <div className="cardbody-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                            const pokemontype = type.type.name;

                            return (
                                <div key={index} className={`pokemontype-${pokemontype}`}>
                                    {pokemontype}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {showModal ? (
                <Modal closeModal={setShowModal} pokemon={pokemon} pokemonname={pokemon.name} imagem={imgUrl}/>
            ) : null}
        </div>
    )
}

export default Pokemon;