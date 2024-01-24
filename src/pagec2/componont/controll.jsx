import React from "react";
import "./Control.css";
import { useState, useEffect } from 'react';
const Control = () => {
    const [play, setPlay] = useState(true);
    return (
        <div className="control_Container">
            <div className="top_container">
                <h2>Video PLayer</h2>
            </div>
            <div className="mid__container">
    <div className="icon__btn">
     {/* <FastRewind fontSize="medium" /> */}
    </div>

   <div className="icon__btn">
     <i class="fa-solid fa-pause" onClick={()=>{
        setPlay(false);
        console.log(play)
     }}></i>
   </div>

   <div className="icon__btn">
    {/* <FastForward fontSize="medium" /> */}
   </div>
 </div>
 <div className="bottom__container">
 <div className="slider__container">
   {/* <PrettoSlider /> */}
 </div>
 <div className="control__box">
   <div className="inner__controls">
     <div className="icon__btn">
       {/* <PlayArrow fontSize="medium" /> */}
     </div>
     <div className="icon__btn">
       {/* <SkipNext fontSize="medium" /> */}
     </div>
     <div className="icon__btn">
       {/* <VolumeUp fontSize="medium" /> */}
     </div>

     {/* <Slider
             className="volumeSlider" /> */}
     <span>5/20</span>
     </div>
   </div>
 </div>
        </div>
    )
}



export default Control;