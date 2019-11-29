import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { LoadingSpinner } from 'video-react';
import Showhistorical from './showhistorical';
import './App.css';

const Historical =() => {
    return(
      <div className= "historicalDiv">
        
         <Showhistorical
                      video={"'https://www.youtube.com/watch?v=0vk5Rmo3E3E&t=4s'"}
                      audio={2019}
                      read="EvolveU"
                      historicalName="Lougheed Calgary"
                      backgroundImage1="'https://media.mydriveholiday.com/pages/501/Lougheed%20House%20(1).jpg'"/> 
        
       
      </div>
    )

}

export default Historical;