import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useSelector } from'react-redux';

const MapContainer = () => {
  const { restaurants } = useSelector((state) => state.restaurants);
  const mapStyles = { height: '400px', width: '100%' };
  const defaultCenter = { lat: 39.9042, lng: 116.4074 }; // 北京坐标

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.id}
            position={{ lat: restaurant.lat, lng: restaurant.lng }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;