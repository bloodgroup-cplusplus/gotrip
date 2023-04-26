import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapPropertyFinder() {
  const defaultProps = {
    center: {
      lat: 27.3313,
      lng: 88.61502627,
    },
    zoom: 15,
  };

  return (
    // Important! Alwys set the container height explicitlya

    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent lat={27.3314} lng={88.6138} text="My Marker" />
    </GoogleMapReact>
  );
}
