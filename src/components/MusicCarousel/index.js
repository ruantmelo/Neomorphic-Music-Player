import React from 'react';
import Slider from "react-slick";
import {MusicSquare} from './style';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const isEmpty = obj => {
    for (let a in obj ) return false;
    return true;
}

const MusicCarousel = ({musics}) => {
    return(
        <Slider
            arrows  = {false}
            draggable
            infinite = {false}
            slidesToShow = {2}
        >
            
            {isEmpty(musics)? <div><p>Nothing Here</p></div>:musics.map( (music, index) => <MusicSquare key = {index} music = {music}/> )}
        </Slider>
    )

}

export default MusicCarousel