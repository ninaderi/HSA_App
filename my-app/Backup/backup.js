function Map() {
  return (
    <GoogleMap 
      defaultZoom={10} 
      defaultCenter={{lat: 51.048615, lng: -114.070847}}
    >
     
      {artData.map(art => (
        <Marker 
          key={art.art_id} 
          position={{
            // lat: art.latitude,
            lat: 51.048615,
            lng: -114.070847
            // lng: art.longitude
          }}
        />
      ))}

    </GoogleMap>
  );
}




            <div><Historical/></div>
            <div id="title">
              <a href={selectedPin.website}>VISIT</a>
            </div>   