import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import './../css/maps.css'

export default function Maps() {
    const center = {
        lat: -22.526766,
        lng: -44.106797
    };

    const markLoja1 = {
        lat: -22.517722845115603,
        lng: -44.1070110678421
    };

    const markLoja2 = {
        lat: -22.521640,
        lng: -44.112148
    };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey:'AIzaSyAqCM1TE1BdKxIeryhnZZP2JMWd2X6wiRM'
    });

    if (!isLoaded)return <div>Carregando...</div>;

   
        return (
            <GoogleMap
            zoom={15}
            center={center}
            mapContainerClassName='containerStyle'>
                <Marker position={markLoja1}
                options={{
                    label:{
                        text:'Delegacia da Mulher',
                    }
                }} 
                />
                <Marker position={markLoja2}
                options={{
                    label:{
                        text:'Delegacia da Mulher',
                    }
                }}
                />

            </GoogleMap>
        )
}


