import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";

import UserProvider, { useAppContext } from "./UserProvider";
import UserCard from "./UserCard";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import "./App.css";

function Markers({ data }) {
  const map = useMap();
  return (
    data.length > 0 &&
    data.map((marker, index) => {
      return (
        <Marker
          eventHandlers={{
            click: () => {
              map.flyTo([marker.address.geo.lat, marker.address.geo.lng], 5);
            }
          }}
          key={index}
          position={{
            lat: marker.address.geo.lat,
            lng: marker.address.geo.lng
          }}
          Icon={Icon}
        >
          <Popup>
            <div className="map-popup">{marker.name}</div>
          </Popup>
        </Marker>
      );
    })
  );
}

function SetMapView() {
  const { user } = useAppContext();
  const map = useMap();

  useEffect(() => {
    if (!user) return;

    const { lat, lng } = user.address.geo;

    map.flyTo([lat, lng], 5);
  }, [user]);

  return null;
}

function App() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/"
        );
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }

      setUsers(userData);
      setData(userData);

      // Map
    })();
  }, []);

  return (
    <UserProvider>
      <div className="App">
        <div className="cards-container">
          {users.map((user, index) => (
            <UserCard userData={user} key={index} />
          ))}
        </div>

        <div className="map-container">
          <MapContainer
            center={[47.217324, 13.097555]}
            zoom={0}
            style={{ height: "100vh" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            <Markers data={data} />
            <SetMapView />
          </MapContainer>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
