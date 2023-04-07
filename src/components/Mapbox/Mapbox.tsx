import { FC } from 'react';
import InteractiveMap, { GeolocateControl, Marker } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";

import Contact from '../Contact/Contact';

interface MapboxProps {
  contacts: Array<Contact>,
  onMarkerClick: any,
  onAddMarkerClick: any
}

const Mapbox: FC<MapboxProps> = ({contacts, onMarkerClick, onAddMarkerClick}) => {
  const mapContainerStyle = {
    height: '45vh',
  }

  return (
    <div className='border-black border-4 w-9/12' style={mapContainerStyle}>
        <InteractiveMap
          mapboxAccessToken='pk.eyJ1IjoieXZlc3RhbiIsImEiOiJjbGRwczllamkxNjg1M3F0NmpmeW1zMHhhIn0.LpkG5sF33tcYKwZ4cbuEwg'
          initialViewState={{
            latitude: contacts[0].latitude,
            longitude: contacts[0].longitude,
            zoom: 16
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onClick={(e) => onAddMarkerClick(e)}
        >
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
          {contacts.map((contact) => {
            return (
              <Marker
                key={contact.key}
                latitude={contact.latitude}
                longitude={contact.longitude}
                anchor='bottom'
                onClick={() => onMarkerClick(contact)}  
              ></Marker>
            )
          })}
        </InteractiveMap>
    </div>
  );
}

export default Mapbox;
