import React from "react";

const Description = props => {
    const {title, desc, name} = props

    return(
        <div className='info'>
            <h1>{title}</h1>
            <h3>By {name}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default Description