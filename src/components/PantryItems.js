import React from "react";

const PantryItems = (props) => {
   const {ingredient} = props;

    return(
        <div className="p-2 mx-auto d-flex flex-wrap">
            <button
                key={Math.random()}
                type="button"
                className="m-1 btn btn-primary btn-sm pantry-item"
            >
                {ingredient}{" "}
                <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </button>
        </div>
    )
}

export default PantryItems;
