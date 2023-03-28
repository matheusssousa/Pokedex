import React from "react";
import SocialMedia from "../SocialMedia";
import "./style.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="bar-footer"/>
            <div className="conteudo-footer">
                <div className="info">
                    <p>Direitos de imagem para Nintendo & The Pokémon Company</p>
                    <p>Dados pegos da API - pokeapi.co</p>
                </div>
                <SocialMedia />
            </div>
        </div>
    )
}

export default Footer;