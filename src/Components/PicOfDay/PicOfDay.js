import React from "react";
import './PicOfDay.css';
import Description from "./Description";
import Picture from "./Picture";

const PicOfDay = props => {
    const {title, name, desc, imgURL} = props

    return (
        <div className='pod'>
            <Picture title={title} imgURL={imgURL}/>
            <Description name={name} desc={desc} title={title}/>
        </div>
    )
}

export default PicOfDay