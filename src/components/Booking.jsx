import React from 'react'
import { useState,useEffect } from 'react'
import "./Booking.css"
const Booking = () => {

  const [movielist,setmovieList]=useState([])

  useEffect(()=>{
    fetch('http://localhost:8080/moviesBooked')
    .then((res)=>res.json())
    .then((data)=>
    setmovieList(data))
  },[])
  // "id": 2,
  // "movie_id": 2,
  // "name": "Men",  
  // "seat": "A2" 
  return (
    <div>
      <table>
        <th>
          <tr>
            <td>name</td>
            <td>seat</td>
            <td>movie id</td>
          </tr>
        </th>
      <tbody>
        {
          movielist.map((ele)=>{
            return(<>
          <tr>
             <td>{ele.name}</td>
             <td>{ele.seat}</td>
             <td>{ele.id}</td>
          </tr>
            </>)
          })
         
        }
      </tbody>

      </table>
    </div>
  )
}

export default Booking