import { useState } from 'react';
import ReactMapGl from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

const Map = ({ searchResults }) => {
  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11
  });


  return (
    <ReactMapGl
        mapStyle='mapbox://styles/goncalosantos01/clax80suc000314o58tfmttks'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        
    >

    </ReactMapGl>
  )
}

export default Map