import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends Component {
	render() {
	  return (
	    <div className="App">
	      <header className="App-header">
	        <img src={logo} className="App-logo" alt="logo" />
	        
	      </header>
	      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            
        </InfoWindow>
      </Map>

	    </div>
	  );
	}
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyCMRyL0R2LzVA-0CItXWd5DLCCLy-C8VyE")
})(App)