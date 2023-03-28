import { CaretRight, CaretLeft } from "@phosphor-icons/react";
import React from "react";
import "./style.css";

const Pagination = (props) => {
    const { page, totalPages, previousClick, afterClick } = props

    return (
        <div className="containerpagination">
            <button onClick={previousClick}><CaretLeft size={35} /></button>
            <h2>{page} de {totalPages}</h2>
            <button onClick={afterClick}><CaretRight size={35} /></button>
        </div>
    )
}

export default Pagination;