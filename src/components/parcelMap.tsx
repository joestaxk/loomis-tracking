import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/marker-icon-2x.png',
    iconUrl: '/marker-icon.png',
    shadowUrl: '/marker-shadow.png',
});

const ParcelMap = ({ currentLocation, destination }: any) => {
    const positions = [currentLocation, destination];
    console.log(positions)
    return (
        <MapContainer 
            center={currentLocation} 
            zoom={13} 
            style={{ height: "100vh", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={currentLocation}>
                <Popup>Current Location</Popup>
            </Marker>
            <Marker position={destination}>
                <Popup>Destination</Popup>
            </Marker>
            <Polyline positions={positions} color="blue" />
        </MapContainer>
    );
};

export default ParcelMap;