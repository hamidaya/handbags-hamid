import React from "react";

const Tile = ({img,title,imgDescription,children}) => {

    return (
        <section>
            {img && <img src={img} alt={imgDescription}/>}
            <h2>{title}</h2>
            {children}
        </section>

    );
};


export default Tile;