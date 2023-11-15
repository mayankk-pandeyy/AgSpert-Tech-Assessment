import React from "react";
import { useRef, useState } from "react";

import { mapOptions } from "./components/MapConfiguration";
import "./App.css";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

const center = {
  lat : 25.421919,
  lng : 82.005563
};
const marker1 ={
  lat : 25.421919,
  lng : 82.005563
}

const marker2 ={
  lat : 25.423760,
  lng : 81.996739
}





class Map extends React.Component {
  state = {
    progress: [],
  }
}

const velocity = 5












function App() {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });

  const [directionsResponse, setDirectionsResponse] = useState(null);


  const customMarker = {
    path: "M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805",
    fillColor: "red",
    fillOpacity: 2,
    strokeWeight: 1,
    rotation: 0,
    scale: 1,
  };


var latitude1 = 25.421919;
var longitude1 = 82.005563;
var latitude2 = 25.423760;
var longitude2 = 81.996739;


  


  async function calculateRoute() {
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: marker1,
      destination: marker2,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    var distance = window.google.maps.geometry.spherical.computeDistanceBetween(new window.google.maps.LatLng(latitude1, longitude1), new window.google.maps.LatLng(latitude2, longitude2)); 
    console.log(distance);
  }


  return isLoaded ? (
    <>
    <div>
      <button onClick={calculateRoute}>Calculate Route</button>
    </div>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100vh" }}
      >
        <Marker position={marker2} />
        <Marker position={marker1} />
        <Marker
  position={marker1}
  icon={customMarker}
 />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
}

export default App;