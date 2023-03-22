import React from "react";
import Pagination from "../Pagination";
import Pokemon from "../Pokemon";
import "./style.css";

const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages } = props
    console.log("pokemons: ", pokemons)

    const OnPreviousClickHandler = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    const OnAfterClickHandler = () => {
        if (page + 1 != totalPages) {
            setPage(page + 1)
        }
    }

    return (
        <div className="pokedex">
            <div className="pokedex-header">
                <h1>Pokedex</h1>
                <div className="pokedex-pagination">
                    <Pagination page={page + 1} totalPages={totalPages} previousClick={OnPreviousClickHandler} afterClick={OnAfterClickHandler} />
                </div>
            </div>
            {loading ? (<div>Carregando</div>) :
                (<div className="pokedex-grid">
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (<Pokemon pokemon={pokemon} key={index} />)
                    })}
                </div>)}
        </div>
    )
}
export default Pokedex;