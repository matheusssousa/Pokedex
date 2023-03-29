import { X } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import "./style.css";

const Modal = ({ pokemon, closeModal, pokemonname, imagem }) => {

    const handlerCloseModal = () => {
        closeModal(false)
    }

    return (
        <div className="overlay">
            <div className="modal">
                <div className="modal-header">
                    <button onClick={(event) => { event.stopPropagation(); handlerCloseModal(event) }}><X size={20} /></button>
                </div>
                <div className="modal-container">
                    <div className="modal-container-left">
                        <img alt={pokemon.name} src={imagem} className="imagem" />
                    </div>
                    <div className="modal-container-right">
                        <h1 className="pokemon-name-modal">{pokemon.name}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;