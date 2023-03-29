import React, {useEffect, useState} from 'react';
import './styles.css';
import SearchBar from './components/SearchBar';
import Pokedex from './components/Pokedex';
import Loading from './components/Loading';
import { getPokemonData, getPokemons, searchPokemon } from './Api';
import Footer from './components/Footer';
import Header from './components/Header';
import { Waves } from './components/Waves';

function App() {
  const [loading,setLoading] = useState(false);
  const [pokemons,setPokemons] = useState([]);
  const [page,setPage] = useState(0);
  const [totalPages,setTotalPages] = useState(0);
  const [notFound,setNotFound] = useState(false);

  const itemsPerPage = 50

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      setNotFound(false)
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

  const onSearchHandler = async (pokemon) =>{
    if (!pokemon) {
      return fetchPokemons()
    }
    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if (!result) {
      setNotFound(true)
    } else{
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchPokemons();
  }, [page])

  return (
    <>
      <Header />
      <Waves />
      <div className="App">
        <SearchBar onSearchHandler={onSearchHandler}/>
        {notFound ? (
          <div className='not-found-text'>Sinto muito. Eu falhei contigo.</div>
        ) : (
          <>
            <Pokedex pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage}/>
            <Loading loading={loading} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
