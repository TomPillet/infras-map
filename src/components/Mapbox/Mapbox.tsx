import React from 'react';
import Map, { GeolocateControl } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";


function Mapbox() {
  const mapContainerStyle = {
    height: '35vh',
  }

  return (
    <div className='border-black border-4 w-9/12' style={mapContainerStyle}>
      <Map
        mapboxAccessToken='pk.eyJ1IjoieXZlc3RhbiIsImEiOiJjbGRwczllamkxNjg1M3F0NmpmeW1zMHhhIn0.LpkG5sF33tcYKwZ4cbuEwg'
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <GeolocateControl
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
      </Map>
    </div>
  )
}

export default Mapbox;
