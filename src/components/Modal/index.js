import { X } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import "./style.css";

const Modal = ({pokemon, closeModal, pokemonname, imagem}) => {
    
    const handlerCloseModal = () => {
        closeModal(false)
    }
    return(
        <div className="overlay">
            <div className="modal">
                <nav className="modal-header">
                    <button onClick={handlerCloseModal()}><X size={20}/></button>
                </nav>
                <div className="modal-container-left">
                    <img alt={pokemon.name} src={imagem} className="imagem"/>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Modal;