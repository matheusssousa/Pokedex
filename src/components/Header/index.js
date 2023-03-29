import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/index.js'

import './style.css';
import PikachuImg from '../../assets/pikachu-img.png';
import { Lightning } from '@phosphor-icons/react';

const Header = () => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <div className='header-body'>
                <Navbar />
                <div className='header-info'>
                    <div className='text-info'>
                        <h1 className='pikachu-name'>{pokemon && (pokemon.name)}</h1>
                        {/* {pokemon.types.map((type, index) => {
                            const pokemontype = type.type.name;

                            return (
                                <div key={index} className={`pokemontype-${pokemontype}`}>
                                    {pokemontype}
                                </div>
                            )
                        })} */}
                        <p> No Japão, a palavra ‘Pika’ é uma onomatopeia para ruídos elétricos. Enquanto que ‘Chu’ é como eles descrevem o som feito por ratos. Portanto, sendo ele um Pokémon que é um rato com poderes elétricos, foi escolhido seu nome como Pikachu.</p>
                    </div>
                    <div className='bar-header-info'>
                        <div className='bar-header-top' />
                        <Lightning size={50} />
                        <div className='bar-header' />
                    </div>
                    <img alt='pikachu' src={PikachuImg} className="img-pikachu" />
                </div>
            </div>
            <div className='header-bottom' />
        </div>
    )
}

export default Header;