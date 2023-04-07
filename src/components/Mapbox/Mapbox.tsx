import { FC } from 'react';
import Map, { GeolocateControl, Marker } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";

import Contact from '../Contact/Contact';

interface MapboxProps {
  contacts: Array<Contact>,
  onClick: any,
}

const Mapbox: FC<MapboxProps> = ({contacts, onClick}) => {
  const mapContainerStyle = {
    height: '45vh',
  }

  return (
    <div className='border-black border-4 w-9/12' style={mapContainerStyle}>
        <Map
          mapboxAccessToken='pk.eyJ1IjoieXZlc3RhbiIsImEiOiJjbGRwczllamkxNjg1M3F0NmpmeW1zMHhhIn0.LpkG5sF33tcYKwZ4cbuEwg'
          initialViewState={{
            latitude: contacts[0].latitude,
            longitude: contacts[0].longitude,
            zoom: 16
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
          {contacts.map((contact) => {
            return (
              <Marker
                latitude={contact.latitude}
                longitude={contact.longitude}
                anchor='bottom'
                onClick={() => onClick(contact)}  
              ></Marker>
            )
          })}
        </Map>
    </div>
  );
}

export default Mapbox;
