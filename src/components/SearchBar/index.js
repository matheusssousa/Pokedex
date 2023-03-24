import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";
import { searchPokemon } from "../../Api";
import "./style.css";

const SearchBar = () => {
    const [search, setSearch] = useState("dito")
    const [pokemon, setPokemon] = useState()

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
        // const pokemon = onSearch(search)
        // console.log("pokemon: ", search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <div className="searchbar-input">
                    <input placeholder="Pesquisar Pokemon" onChange={handleSearch} />
                    <div className="bar" />
                </div>
                <div className="searchbar-buttoncontainer">
                    <button onClick={onButtonClickHandler} title="Pesquisar"><MagnifyingGlass size={22} /></button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;