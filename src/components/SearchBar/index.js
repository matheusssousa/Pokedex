import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";
import { searchPokemon } from "../../Api";
import "./style.css";

const SearchBar = (props) => {
    const [search, setSearch] = useState("dito")
    const {onSearchHandler} = props

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length === 0) {
            onSearchHandler(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <div className="searchbar-input">
                    <input placeholder="Pesquisar Pokemon" onChange={onChangeHandler} />
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