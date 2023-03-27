import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import React from "react";
import "./style.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="info">
                <p>Feito por Matheus Sousa</p>
                <nav className="info-icons">
                    <a href="https://www.instagram.com/theusousab/" target="_blank" rel="noopener noreferrer" className="instagram">
                        <InstagramLogo size={20} />
                    </a>
                    <a href="https://github.com/matheusssousa" target="_blank" rel="noopener noreferrer" className="github">
                        <GithubLogo size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/matheus-sousa-17b214208/" target="_blank" rel="noopener noreferrer" className="linkedin">
                        <LinkedinLogo size={20} />
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default Footer;