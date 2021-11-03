import React from "react";

const Picture = props => {
    const {imgURL, title} = props

    return (
        <div>
            <img
            alt={title} 
            src={imgURL}
            className='img' />
        </div>
    )
}

export default Picture