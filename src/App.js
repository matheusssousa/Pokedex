import React, {useEffect, useState} from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons } from './Api';

function App() {
  const [loading,setLoading] = useState(false);
  const [pokemons,setPokemons] = useState([]);
  const [page,setPage] = useState(0);
  const [totalPages,setTotalPages] = useState(0);

  const itemsPerPage = 50

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(itemsPerPage, itemsPerPage * page);
      const promises = data.results.map(async(pokemon) => {
        return await getPokemonData(pokemon.url)
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itemsPerPage))
    } catch (error) {
      console.log("fetchPokemons error: ",error);
    }
  }

  useEffect(() => {
    console.log("carregou")
    fetchPokemons();
  }, [page])

  return (
    <>
      <Navbar />
      <div className="App">
        <SearchBar />
        <Pokedex pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage}/>
      </div>
    </>
  );
}

export default App;
