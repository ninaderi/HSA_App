import React, { useState } from 'react';
import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
// import data from './data/publicArt.json'
import Historical from "./historical.js";
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';


const list = [ 
  { "id": "1",
    "latitude": "51.0472",
    "longitude": "-114.0652", 
    "title": "The Grand YYC",
    "desc1": "The Grand is situated on the land where the Bow River meets the Elbow River. The traditional Blackfoot name of this place is Mohkinstsis, which is also referred to as the City of Calgary. We honour and acknowledge Mohkinstsis and the traditional Treaty 7 territory and oral practices of the Blackfoot confederacy: Siksika, Kainai, Piikani as well as the Iyarhe Nakoda and Tsuut’ina nations who also call this place home.  We also acknowledge that this territory is home to the Métis Nation of Alberta, Region 3 within the historical Northwest Métis homeland.",
    "secondPage": <Historical/>,
  },

  { "id": "2",
    "latitude": "51.040660",
    "longitude": "-114.077256",
    "title": "Lougheed House",
    "desc1":"Built in 1891 and originally known as 'Beaulieu', the French meaning 'beautiful place', Lougheed House is now a national historic site located in the Beltline district of Calgary, Alberta.",
    "secondPage": "The content will be updated in the next phase",
  },

  { "id": "3",
    "latitude": "51.044312",
    "longitude": "-114.063159",
    "title": "Calgary Tower",
    "desc1": "The Calgary Tower is a 190.8-meter free standing observation tower in Downtown Calgary, Alberta, Canada. Originally called the Husky Tower, it was conceived as a joint venture between Marathon Realty Company Limited and Husky Oil as part of an urban renewal plan and to celebrate Canada's centennial of 1967.",
    "secondPage": "https://www.calgary.ca/CSPS/Recreation/Pages/Public-Art/Downtown-Gateway-LRT-Stations.aspx",
  },
]


function Map() {
  const [selectedPin, setSelectedPin] = useState(null);


  return (
    <GoogleMap 
      defaultZoom={14} 
      defaultCenter={{lat: 51.048615, lng: -114.070847}}
    >
     {list.map(art => (
        <Marker 
          key={list.id} 
          position={{
            lat: Number(art.latitude),
            lng: Number(art.longitude)
          }}
          onClick={() => {
            setSelectedPin(art);

          }}
        />
      ))}

     {selectedPin && (
        <InfoWindow
          position={{
                lat: Number(selectedPin.latitude),
                lng: Number(selectedPin.longitude) 
              }} 

                
            onCloseClick={() => {
              setSelectedPin(null);
              
            }}
            >
          <div>
            <div>
              <h3>{selectedPin.title}</h3>
              <h5>{selectedPin.desc1}</h5>                  
            </div>



            <div id="title">
              <a href={selectedPin.secondPage}>VISIT</a>

            </div>  
    
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}


const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div className = "map" style={{width: '60%', height: '100vh'}}>
      <WrappedMap 
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC10uK6r0qvqAk2rHMHajfcX-wZ2TB3UOI&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{height: `100%` }} />}
      />
    </div>
  );
}
