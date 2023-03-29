import React, { useRef } from "react";
import Pagination from "../Pagination";
import Pokemon from "../Pokemon";
import "./style.css";

const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages } = props
    const pokemonListRef = useRef();

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

    return (
        <div className="pokedex">
            {loading ? null :
                (<div className="pokedex-grid" ref={pokemonListRef}>
                    {pokemons && pokemons.map((pokemon, index) => {
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