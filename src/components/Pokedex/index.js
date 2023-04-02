import React, { useRef, useState } from "react";
import Pagination from "../Pagination";
import Pokemon from "../Pokemon";
import "./style.css";

const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages } = props
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

    const filterTypePokemonList = (filterType) =>{
        if (!filterType) {
            return pokemons;
        }
        return pokemons.filter(pokemon => pokemon.types[0].type.name === filterType);
    }

    console.log("filtro: ", filterType)

    return (
        <div className="pokedex">
            <select onChange={(e) => setFilterType(e.target.value)}>
                <option value="">Todos os tipos</option>
                <option value="grass">Planta</option>
                <option value="fire">Fogo</option>
                <option value="water">Água</option>
                <option value="electric">Elétrico</option>
                <option value="rock">Pedra</option>
                <option value="ground">Terra</option>
                <option value="poison">Veneno</option>
                <option value="psychic">Psíquico</option>
                <option value="bug">Inseto</option>
                <option value="flying">Voador</option>
                <option value="fighting">Lutador</option>
                <option value="ghost">Fantasma</option>
                <option value="ice">Gelo</option>
                <option value="dragon">Dragão</option>
                <option value="dark">Sombrio</option>
                <option value="steel">Aço</option>
                <option value="fairy">Fada</option>
            </select>

            {loading ? null :
                (<div className="pokedex-grid" ref={pokemonListRef}>
                    {filterTypePokemonList(filterType).map((pokemon, index) => {
                        return (<Pokemon pokemon={pokemon} key={index}/>)
                    })}
                </div>)}
            <div className="pokedex-pagination">
                <Pagination page={page + 1} totalPages={totalPages} previousClick={OnPreviousClickHandler} afterClick={OnAfterClickHandler} />
            </div>
        </div>
    )
}
export default Pokedex;