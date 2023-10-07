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
        <AnyReactComponent
          lat={-22.521640}
          lng={-44.112148}
          text="Delagacia da Mulher de Volta Redonda"
        />
        <AnyReactComponent
          lat={-22.517722845115603}
          lng={-44.1070110678421}
          text="Delegacia 222"
        />


      </GoogleMapReact>
    </div>
  );
}