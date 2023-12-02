import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';



const Map = () => {
  const [districtData, setDistrictData] = useState(null);

  useEffect(() => {
    // Fetch GeoJSON data and set it to districtData state
    fetch('/uttarpradesh.js')
      .then((response) => response.json())
      .then((data) => setDistrictData(data))
      .catch((error) => console.error('Error fetching GeoJSON data:', error));
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyB4jRJ25sj_mLjuPoL0v22ocrE-kS-PRZw"
    >
      <GoogleMap
        center={{ lat: 26.8467, lng: 80.9462 }} // Set the center to the coordinates of Uttar Pradesh
        zoom={7} // Adjust the zoom level as needed
      >
        {districtData && districtData.features.map((feature, index) => (
          <Polygon
            key={index}
            path={feature.geometry.coordinates[0].map(([lng, lat]) => ({ lat, lng }))}
            options={{
              fillColor: '#00FF00', // Fill color of the polygon
              fillOpacity: 0.4, // Opacity of the fill color
              strokeColor: '#0000FF', // Border color
              strokeOpacity: 1, // Opacity of the border color
              strokeWeight: 2, // Border thickness
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
