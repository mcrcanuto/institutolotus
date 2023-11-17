import GoogleMapReact from 'google-map-react'

///  https://www.npmjs.com/package/google-map-react  



const AnyReactComponent = ({ text  }:any) => <div>{text}</div>;

export default function Maps(){
  const defaultProps = {
    center: {
      lat: -22.526766,
      lng: -44.106797
    },  
    zoom: 15
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAqCM1TE1BdKxIeryhnZZP2JMWd2X6wiRM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
       
      


      </GoogleMapReact>
    </div>
  );
}