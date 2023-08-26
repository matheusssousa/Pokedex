import React, { useEffect, useRef, useState } from "react";
import Pagination from "../Pagination";
import Pokemon from "../Pokemon";
import "./style.css";
import "../PokemonTypes/PokemonCards.css";
import { getPokemonsByType } from "../../Api";

const Pokedex = (props) => {
    const { loading, page, setPage, totalPages, onItemsPerPageChange, pokemons } = props;
    const pokemonListRef = useRef();
    const [filterType, setFilterType] = useState("");
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [allPokemons, setAllPokemons] = useState([]);

    const OnPreviousClickHandler = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }

    const OnAfterClickHandler = () => {
        if (page + 1 !== totalPages) {
            setPage(page + 1);
        }
    }

    const filterTypePokemonList = async (type) => {
        try {
            const pokemonsOfType = await getPokemonsByType(type);
            setFilteredPokemons(pokemonsOfType);
        } catch (error) {
            console.error(error);
            setFilteredPokemons([]);
        }
    }

    useEffect(() => {
        setPage(0);
        onItemsPerPageChange(100);
        setAllPokemons(pokemons);
    }, [pokemons, setPage, onItemsPerPageChange]);

    useEffect(() => {
        if (!filterType) {
            setFilteredPokemons(allPokemons);
        } else {
            filterTypePokemonList(filterType);
        }
        
        setPage(0); // Reset page when filter changes
    }, [filterType, allPokemons, setPage]);

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

    return (
        <div className="pokedex">
            <div className="pokemon-type md:pokemon-type">
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
                    {filteredPokemons.map((pokemon, index) => (
                        <Pokemon pokemon={pokemon} key={index} />
                    ))}
                </div>)
            }
            <div className="pokedex-pagination">
                <Pagination page={page + 1} totalPages={totalPages} previousClick={OnPreviousClickHandler} afterClick={OnAfterClickHandler} />
            </div>
        </div>
    )
}
export default Pokedex;
