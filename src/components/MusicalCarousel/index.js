import React from 'react';
import Slider from "react-slick";
import {MusicalSquare, NothingHere} from './style';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const isEmpty = obj => {
    for (let a in obj ) return false;
    return true;
}

const MusicalCarousel = ({type, data, queryParams}) => {

    console.log(data);

    return(
        <Slider
            arrows  = {false}
            draggable
            infinite = {false}
            slidesToShow = {2.2}
        >
            
            {isEmpty(data)? <NothingHere/>:data.map( (dt, index) => <MusicalSquare type = {type} queryParams = {queryParams? queryParams : {}} key = {index} data = {dt}/> )}
        </Slider>
    )

}

export default MusicalCarousel