import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Link, Outlet, useNavigate } from "react-router-dom";
import { JJCON } from '../App';
// import styles from './FilmDycko.module.css';


function Filmi(props: {
  arrtest: {
    id: number,
    img: string,
    title: string,
    description: string,
    year: number,
    genre: string[],
    urlTrailer: string
  }[]
}) {
  const genre = ['Приключения','Комедия','Семейный']
  const [filrtGenre, setfilrtGenre] = useState(['Приключения','Комедия','Семейный']);
  const navigate = useNavigate();

  return (<div className='box_All_Film'>
    <div className='filtr_Film'>
      <select value="" name="" id="" >
        
          
        <option value="4">Фэнтези</option>
        <option value="5">Мюзикл</option>
        <option value="6">Исторический</option>

      </select>
    </div>
    {
      props.arrtest.map((item, index) => {

        return <div key={`prrod${index}`}>
          <div className='box_Film'>
            <div className='item_Film'>
              <img src={item.img} alt="" />
              <p>{item.title}</p>
              <p>Жанр: {item.genre}</p>
              <button onClick={() => {
                navigate(`/pagec2/${item.id}`)
              }}>Перейти</button>
            </div>
          </div>
        </div>
      })
    }
  </div>)


}
export default Filmi