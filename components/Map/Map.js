import React from 'react';
import { Map, TileLayer, Marker, Tooltip } from 'react-leaflet';

const MarketToolTip = (day, description) => {
  return `Day ${day} - ${description}`;
};

const MapContainer = ({ coordinates, locations }) => {
  return (
    <Map
      center={[coordinates[1], coordinates[0]]}
      zoom={6}
      className='h-screen/3'
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker
          key={location._id}
          position={[location.coordinates[1], location.coordinates[0]]}
        >
          <Tooltip permanent={true}>
            {MarketToolTip(location.day, location.description)}
          </Tooltip>
        </Marker>
      ))}
    </Map>
  );
};

export default MapContainer;
