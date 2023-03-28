import { Moon, Sun } from "@phosphor-icons/react";
import React from "react";
import { useTheme } from "../../hooks/useTheme";
import SocialMedia from "../SocialMedia";
import "./style.css";

const Navbar = () => {
    const logoImg = "https://raw.githubusercontent.com/carlosdancr/pokedex-react/15d991abf17a16d8ad2eb85e48ea4156dc52d75c/src/assets/logo-pokemon.svg";

    const { theme, setTheme } = useTheme();

    return (
        <div className="navbar">
            <nav>
                <img alt="pokeapi-logo" src={logoImg} />
            </nav>
            <div className="info-navbar">
                <div>
                    {theme == "light" ? <Moon size={25} onClick={() => setTheme("dark")} className="buttonmoon" /> : <Sun size={25} onClick={() => setTheme("light")} className="buttonsun" />}
                </div>
                <div className="bar-navbar"/>
                <SocialMedia />
            </div>
        </div>
    )
}

export default Navbar;