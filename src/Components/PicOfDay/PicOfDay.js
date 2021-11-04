import React from "react";
import './PicOfDay.css';
import Description from "./Description";
import Picture from "./Picture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const PicOfDay = props => {
    const {title, name, desc, imgURL, setDate} = props

    const ArrowButton = styled.span`
        display: flex;
        justify-content: center;
        height: 10%;
        font-size: 5rem;
        
    `;

    const changeDay = direction => {
        let d = new Date()
        let oneDayChange = null
        if (direction === 'frwrd')
        {
            oneDayChange = d.setDate(d.getDate() + 1)
        } else if (direction === 'back') 
        { 
            oneDayChange = d.setDate(d.getDate() - 1)
        }
        oneDayChange = new Date(oneDayChange).toISOString().slice(0, 10);


        setDate(oneDayChange);
    }

    return (
        <div className='pod'>
            <ArrowButton onClick={changeDay('back')}>
                <FontAwesomeIcon icon={faChevronCircleLeft} />
            </ArrowButton>
            <Picture title={title} imgURL={imgURL}/>
            <ArrowButton as="a" href="#" onClick={changeDay('back')}>
                <FontAwesomeIcon icon={faChevronCircleRight} />
            </ArrowButton>
            <Description name={name} desc={desc} title={title}/>
        </div>
    )
}

export default PicOfDay