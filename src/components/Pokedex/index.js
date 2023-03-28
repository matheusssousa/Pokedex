import React from "react";
import Pagination from "../Pagination";
import Pokemon from "../Pokemon";
import "./style.css";

const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages } = props

    const OnPreviousClickHandler = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    const OnAfterClickHandler = () => {
        if (page + 1 !== totalPages) {
            setPage(page + 1)
        }
    }

    return (
        <div className="pokedex">
            {loading ? null :
                (<div className="pokedex-grid">
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