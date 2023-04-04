import React, { useEffect, useRef, useState } from "react";
import Pagination from "../Pagination";
import Pokemon from "../Pokemon";
import "./style.css";
import "../PokemonTypes/PokemonCards.css";

const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages, onItemsPerPageChange } = props
    const pokemonListRef = useRef();
    const [filterType, setFilterType] = useState();

    const OnPreviousClickHandler = () => {
        if (page > 0) {
            setPage(page - 1)
            pokemonListRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const OnAfterClickHandler = () => {
        if (page + 1 !== totalPages) {
            setPage(page + 1)
            pokemonListRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const filterTypePokemonList = (filterType) => {
        if (!filterType) {
            return pokemons;
        }
        return pokemons.filter(pokemon => pokemon.types[0].type.name === filterType);
    }

    const options = [
        { tipo: "flying" },
        { tipo: "dark" },
        { tipo: "bug" },
        { tipo: "ghost" },
        { tipo: "grass" },
        { tipo: "dragon" },
        { tipo: "poison" },
        { tipo: "fairy" },
        { tipo: "fighting" },
        { tipo: "electric" },
        { tipo: "ground" },
        { tipo: "ice" },
        { tipo: "normal" },
        { tipo: "psychic" },
        { tipo: "rock" },
        { tipo: "steel" },
        { tipo: "water" },
        { tipo: "fire" },
    ];

    useEffect(() => {
        if (filterType === "") {
            onItemsPerPageChange(100)
        } else (onItemsPerPageChange(503))
        setPage(0)
    }, [filterType])

    return (
        <div className="pokedex">
            <div className="pokemon-type">
                <button className="buttonAllFilters" onClick={() => setFilterType("")}>All</button>
                {options.map((opt, index) => {
                    return (
                        <button
                            className={`pokemontype-${opt.tipo}`}
                            key={index}
                            value={opt.tipo}
                            onClick={() => setFilterType(opt.tipo)}
                        >{opt.tipo}</button>)
                })}
            </div>

            {loading ? null :
                (<div className="pokedex-grid" ref={pokemonListRef}>
                    {filterTypePokemonList(filterType).map((pokemon, index) => {
                        return (<Pokemon pokemon={pokemon} key={index} />)
                    })}
                </div>)}
            <div className="pokedex-pagination">
                <Pagination page={page + 1} totalPages={totalPages} previousClick={OnPreviousClickHandler} afterClick={OnAfterClickHandler} />
            </div>
        </div>
    )
}
export default Pokedex;