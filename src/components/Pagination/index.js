import { ArrowArcRight, ArrowArcLeft } from "@phosphor-icons/react";
import React from "react";

const Pagination = (props) => {
    const {page, totalPages, previousClick, afterClick} = props

    return (
        <div className="containerpagination">
            <button onClick={previousClick}><ArrowArcLeft size={22}/></button>
            <div>{page} de {totalPages}</div>
            <button onClick={afterClick}><ArrowArcRight size={22}/></button>
        </div>
    )
}

export default Pagination;