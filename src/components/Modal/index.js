import { Airplay, Ruler, X } from "@phosphor-icons/react";
import React, { useState } from "react";
import "./style.css";

const Modal = ({ pokemon, closeModal, pokemonname, imagem }) => {
    // const [showShiny, setShowShiny] = useState(false)
    // const imgShiny = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemon.id}.png`

    const handlerCloseModal = () => {
        closeModal(false)
    }

    return (
        <div className="overlay" >
            <div className="modal">
                <div className="modal-header">
                    <button onClick={(event) => { event.stopPropagation(); handlerCloseModal(event) }}><X size={20} /></button>
                </div>
                <div className="modal-container">
                    <div className="modal-container-left">
                        <img alt={pokemon.name} src={imagem} className="imagem" />
                        {/* {showShiny ?
                            (<>
                                <img alt={pokemon.name} src={imagem} className="imagem" />
                                <button onClick={setShowShiny(true)}>SHINY</button>
                            </>) : (<>
                                <img alt={pokemon.name} src={imgShiny} className="imagem" />
                                <button onClick={setShowShiny(false)}>NORMAL</button>
                            </>)} */}
                    </div>
                    <div className="modal-container-right">
                        <h1 className="pokemon-name-modal">{pokemon.name}</h1>
                        <span className="types-pokemon-modal">{pokemon.types.map((type, index) => {
                            const pokemontype = type.type.name;

                            return (
                                <div key={index} className={`pokemontype-${pokemontype}`}>
                                    {pokemontype}
                                </div>
                            )
                        })}</span>
                        <div className="pokemon-info-modal">
                            <h1 className="pokemon-stats-modal">Stats</h1>
                            {/* <section className="pokemon-height-modal">
                                <Ruler size={30} weight='bold' />
                                <h1>Altura <p>{pokemon.height / 10} m</p></h1>
                                <Airplay size={30} weight='bold' />
                                <h1>Peso <p>{pokemon.weight / 10} kg</p></h1>
                            </section> */}
                            {pokemon.stats.map((stats, index) => {
                                const basestat = (stats.base_stat);
                                return (
                                    <span key={index} className="stat-info">
                                        <h1 className="stat-name">{stats.stat.name} </h1>
                                        <span className="stat-container-barra">
                                            {/* <div className="h-[2px]" style={{width: `${basestat}px`}}/> */}
                                            <p>{stats.base_stat}</p>
                                        </span>
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;