import React from 'react';
import Slider from "react-slick";
import {MusicSquare} from './style';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const MusicCarousel = props => {

    return(
        <Slider
            arrows  = {false}
            draggable
            infinite = {false}
            slidesToShow = {2}
        >
            {props.musics.map( (music, index) => <MusicSquare key = {index} music = {music}/> )}
        </Slider>
    )

}

export default MusicCarousel