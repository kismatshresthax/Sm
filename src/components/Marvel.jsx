import React from 'react'
import {Link, Route, useParams} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { buttonBaseClasses } from '@mui/material';
import { Button, MenuItem } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export const Marvel = () => {
  const {id}=useParams();
  const [item,setItem]=useState()
  const fetch=async()=>{

    const res= await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=43634ab5f5b50782274a50ec7e7d9811&hash=4761558e45170642234948dc70f24c20`)
    
    setItem(res.data.data.results[0])
  }
  fetch();

  return (
    <>
    {
      (!item)? "":(<>
        <Link to="/"> <Button><ArrowBackIcon /></Button></Link>
        <div className="box-content">
          
          <div className="right-box">
          <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
          </div>
          <div className="left-box">
            <h1>{item.name}</h1>
            <h4>{item.description}</h4>
           
          
          </div>
          
          
        </div>
        <div style={{textAlign:'center',color:'white'}}>
            <ul>
            <h3>Comics Hero</h3>
          {item.comics.items.map((i)=>
          <li>{i.name}</li>
          )}
          </ul>
          </div>
       
    </> )
    }
    </>
  )
}