import React from "react";
import "./style.css";

const Navbar = () => {
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (
        <div className="navbar">
            <nav>
                <img alt="pokeapi-logo" src={logoImg}/>
            </nav>
        </div>
    )
}

export default Navbar;