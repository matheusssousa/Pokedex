import { Moon, Sun } from "@phosphor-icons/react";
import React from "react";
import { useTheme } from "../../hooks/useTheme";
import "./style.css";

const Navbar = () => {
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    const {theme, setTheme} = useTheme();

    return (
        <div className="navbar">
            <div></div>
            <nav>
                <img alt="pokeapi-logo" src={logoImg}/>
            </nav>
            <div>
                {theme == "light" ? <Moon size={32} onClick={() => setTheme("dark")} weight="fill" className="buttonmoon"/> : <Sun size={32} onClick={() => setTheme("light")} weight="fill" className="buttonsun"/>}
            </div>
        </div>
    )
}

export default Navbar;