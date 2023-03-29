import { Airplay, Info, PokerChip, Ruler } from "@phosphor-icons/react";
import React, { useState } from "react";
import Modal from "../Modal";
import "./style.css"

const Pokemon = (props) => {
    const { pokemon } = props
    const [showModal, setShowModal] = useState(false)
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

    const handlerShowModal = () => {
        setShowModal(true)
    }

    return (
        <div className="card-pokemon">
            <div className="pokemonimg">
                {pokemon.sprites.front_default ? (<img alt={pokemon.name} src={imgUrl} />)
                    :
                    (<PokerChip size={80} />)
                }
            </div>
            <div className="pokemoncard-body">
                <nav>
                    <h1 className="pokemon-name">{pokemon.name}</h1>
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
                </nav>
                <div className="pokemon-info">
                    <section className="pokemon-height">
                        <Ruler size={30} weight='bold' />
                        <h1>Altura <p>{pokemon.height/10} m</p></h1>
                    </section>
                    <section className="pokemon-height">
                        <Airplay size={30} weight='bold' />
                        <h1>Peso <p>{pokemon.weight/10} kg</p></h1>
                    </section>
                </div>
                <button onClick={() => handlerShowModal()} className="pokemoncard-button"><Info size={20} weight='bold' />Mais detalhes
                    {showModal ? (
                        <Modal closeModal={setShowModal} pokemon={pokemon} pokemonname={pokemon.name} imagem={imgUrl} />
                    ) : null}
                </button>
            </div>
        </div>
    )
}

export default Pokemon;