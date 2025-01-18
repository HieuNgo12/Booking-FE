import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function ReactGoogleMap(){
  const defaultProps = {
    center: {
      lat: 10.7773549,
      lng: 106.6356536
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '161px', width: '252px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={ 10.7773549}
          lng={106.6356536}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}