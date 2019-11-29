import React from 'react';
import {Switch,Route} from 'react-router-dom';
import App from './App';
import Showhistorical from "./showhistorical.js";



const Home = () =>(

<div>
        <Route exact path="/" component={App} ></Route>
        <Route path="/show" component={Showhistorical}></Route>
</div>
       

      
        
    
   


);
export default Home;