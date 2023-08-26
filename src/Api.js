export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemonsByType = async (type) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const { pokemon } = await response.json();
        const promises = pokemon.map(async (pokemon) => {
            const response = await fetch(pokemon.pokemon.url);
            return await response.json();
        });
        const results = await Promise.all(promises);
        return results;
    } catch (error) {
        console.log("erro: ", error);
    }
};

