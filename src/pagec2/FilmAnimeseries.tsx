import React, { useRef } from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { JJCON } from '../App';
import ReactPlayer from 'react-player'
import Control from "./componont/controll";


function FilmAnimeseries(props: {
  arrtest: {
    id: number,
    img: string,
    title: string,
    description: string,
    year:number,
    genre:string[],
    urlTrailer:string
  }[]
}) {
 
  const [namePage, setNamePage] = useState({
    id: 0,
    img: "Картинка грузится",
    title: "Название должно бть",
    description: "Описание фильма",
    year:0,
    genre:['1','1'],
    urlTrailer:"cc"
  });
  let { id } = useParams();
  const [isPaused,setPaused]=useState(true);
  let refPlayer = useRef(null);
  useEffect(() => {
    setNamePage(props.arrtest.filter((item) => {
      if (id == String(item.id)) {
        return true;
      }
      return false;
    })[0]);
  }, []);
  useEffect(() => {
    console.log(namePage)
  }, [namePage])
  return (

    <div>
      <div >
        <div className='name_Filmc'>
          {namePage.title}
        </div>
        <div className='box_Description'>
          <div className='img_Filmc'>
            <img src={namePage.img} alt="" />
          </div>
          <div className='descript_Filmc'>
            <p>Год: {namePage.year}</p>
            <p>{namePage.description}</p>
          </div>
          
        </div>
        <div className='player_Trailer'>
            <div className='player-wrapper'>
              <ReactPlayer
              ref={refPlayer}
                className='react-player'
                playing={isPaused}
                url={namePage.urlTrailer}
                width='100%'
                height='700px'
                controls = {true}
              />
              
              <button onClick={()=>{
                //console.log(refPlayer.current);
                setPaused(!isPaused);
              }}>
                Pause me
              </button>
              <Control />
            </div>
          </div>
      </div>
    </div>
  )
}
export default FilmAnimeseries;