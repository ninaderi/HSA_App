import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import artData from "./data/publicArt.json";

import historical from "./historical.js";
import showHistorical from "./showhistorical.js";


const list = [
        {
        "art_id": "P2013.002.001",
        "longitude": -114.056673544737,
        "latitude": 51.0462987504574
        }, 
        {
        "art_id": "UB22",
        "longitude": -113.95588525491,
        "latitude": 51.1029217675248
        },
        {
        "art_id": "UB57",
        "longitude": -114.11836200802,
        "latitude": 50.9610813757568
        },
        {
        "art_id": "P2014.006.001",
        "longitude": -114.060746303514,
        "latitude": 51.0575827624613
        }
        ]

function Map() {
  const [selectedPin, setSelectedPin] = useState(null);


  return (
    <GoogleMap 
      defaultZoom={10} 
      defaultCenter={{lat: 51.048615, lng: -114.070847}}
    >
     {list.map(art => (
        <Marker 
          key={list.art_id} 
          position={{
            lat: art.latitude,
            lng: art.longitude 
          }}
          onClick={() => {
            setSelectedPin(art);
          }}
        />
      ))}

     {selectedPin && (
        <InfoWindow
          position={{
                lat: selectedPin.latitude,
                lng: selectedPin.longitude 
              }}
            onCloseClick={() => {
              setSelectedPin(null);
            }}
            >
          <div>art details</div>
          </InfoWindow>

      )}

    </GoogleMap>
  );
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
