import React from 'react';
import Navbar from '../Navbar/index.js'

import './style.css';
import PikachuImg from '../../assets/pikachu-img.png';
import { Lightning } from '@phosphor-icons/react';

const Header = () => {

    return (
        <div>
            <div className='header-body'>
                <Navbar />
                <div className='header-info'>
                    <div className='w-full h-full'>
                    </div>
                    <div className='bar-header-info'>
                        <div className='bar-header-top' />
                        <Lightning size={50} />
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