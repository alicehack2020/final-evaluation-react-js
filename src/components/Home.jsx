import React, { useEffect, useState } from 'react'
import "./Home.css"
const Home = () => {
  const [movielist,setmovieList]=useState([])

  useEffect(()=>{
    fetch('http://localhost:8080/movies')
    .then((res)=>res.json())
    .then((data)=>
    setmovieList(data))
  },[])


  return (
    <div className='movie_div'>
         <>
          {
            movielist.map((ele)=>{
              return(<div >
                <h3>{ele.title}</h3>
                <img src={ele.poster_path} alt="" className='poster'/>
                <button className='moreDetails'>More Details</button>
              </div>)
            })
          }
         </>
    </div>
  )
}

export default Home