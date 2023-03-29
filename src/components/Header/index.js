import React from 'react';
import Navbar from '../Navbar/index.js'

import './style.css';
import PikachuImg from '../../assets/pikachu-img.png';


const Header = () => {
    // const PikachuImg = "https://www.pokepedia.fr/images/thumb/7/76/Pikachu-DEPS.png/250px-Pikachu-DEPS.png"

    return (
        <div>
            <div className='header-body'>
                <Navbar />
                <div className='header-info'>
                    <div className='w-20 h-full'></div>
                    <div className='bar-header-info'>
                        <div className='bar-header-top' />

                        <div className='bar-header' />
                    </div>
                    <img alt='pikachu' src={PikachuImg} className="img-pikachu" />
                </div>
            </div>
            <div className='header-bottom'/>
        </div>
    )
}

export default Header;