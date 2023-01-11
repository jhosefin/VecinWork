import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -33.452251,
  lng: -70.669553,
};

function Mapa() {

    <i class="bi bi-pin-map-fill"></i>

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCdaoHb5Cn1YiYM1qOOp0GVwaAT0W0o1ts"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className='container' id='mapa'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
/*         onLoad={onLoad}
        onUnmount={onUnmount} */
      />
      </div>
  ) : <></>
}

export default React.memo(Mapa)