import { FC } from 'react';
import Map, { GeolocateControl, Marker } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";

interface MapboxProps {}

const Mapbox: FC<MapboxProps> = () => {
  const mapContainerStyle = {
    height: '45vh',
  }

  return (
    <div className='border-black border-4 w-9/12' style={mapContainerStyle}>
        <Map
          mapboxAccessToken='pk.eyJ1IjoieXZlc3RhbiIsImEiOiJjbGRwczllamkxNjg1M3F0NmpmeW1zMHhhIn0.LpkG5sF33tcYKwZ4cbuEwg'
          initialViewState={{
            latitude: 46.85,
            longitude: 2.35,
            zoom: 4
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
        </Map>
    </div>
  );
}

export default Mapbox;
