import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import React from "react";
import "./style.css";

const Pagination = (props) => {
    const {page, totalPages, previousClick, afterClick} = props

    return (
        <div className="containerpagination">
            <button onClick={previousClick}><ArrowLeft size={22}/></button>
            <h2 className="textpagination">{page} de {totalPages}</h2>
            <button onClick={afterClick}><ArrowRight size={22}/></button>
        </div>
    )
}

export default Pagination;