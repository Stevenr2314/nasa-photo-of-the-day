import React from "react";
import './PicOfDay.css';
import Description from "./Description";
import Picture from "./Picture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const PicOfDay = props => {
    const {title, name, desc, imgURL} = props

    return (
        <div className='pod'>
            <span className='span-bttn'>
                <FontAwesomeIcon icon={faChevronCircleLeft} />
            </span>
            <Picture title={title} imgURL={imgURL}/>
            <span className='span-bttn'>
                <FontAwesomeIcon icon={faChevronCircleRight} />
            </span>
            <Description name={name} desc={desc} title={title}/>
        </div>
    )
}

export default PicOfDay