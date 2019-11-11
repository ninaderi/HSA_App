import React, { useState } from 'react';
import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import data from './data/publicArt.json'
import Historical from "./historical.js";
// import showHistorical from "./showhistorical.js";


// const list = [
//         {
//         "art_id": "P2013.002.001",
//         "longitude": -114.056673544737,
//         "latitude": 51.0462987504574
//         }, 
//         {
//         "art_id": "UB22",
//         "longitude": -113.95588525491,
//         "latitude": 51.1029217675248
//         },
//         {
//         "art_id": "UB57",
//         "longitude": -114.11836200802,
//         "latitude": 50.9610813757568
//         },
//         {
//         "art_id": "P2014.006.001",
//         "longitude": -114.060746303514,
//         "latitude": 51.0575827624613
//         }
//         ]

function Map() {
  const [selectedPin, setSelectedPin] = useState(null);


  return (
    <GoogleMap 
      defaultZoom={10} 
      defaultCenter={{lat: 51.048615, lng: -114.070847}}
    >
     {data.map(art => (
        <Marker 
          key={data.art_id} 
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

            <div><Historical/></div>

            <div id="title">
              <a href={selectedPin.website}>VISIT</a>
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
    <div style={{width: '100vw', height: '100vh'}}>
      <WrappedMap 
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC10uK6r0qvqAk2rHMHajfcX-wZ2TB3UOI&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{height: `100%` }} />}
      />
    </div>
  );
}
