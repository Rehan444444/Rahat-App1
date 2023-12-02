// UttarPradeshMap.js
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Polygon } from 'google-maps-react';
import geojson from 'geojson';

const upDistrictsGeoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [80.9346, 26.8467], // Lucknow
            [80.9530, 26.8477],
            [80.9442, 26.8623],
            [80.9249, 26.8570],
            [80.9346, 26.8467],
          ],
        ],
      },
      properties: {
        name: 'Lucknow',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [80.3319, 26.4499], // Kanpur
            [80.3319, 26.4685],
            [80.3626, 26.4685],
            [80.3626, 26.4499],
            [80.3319, 26.4499],
          ],
        ],
      },
      properties: {
        name: 'Kanpur',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [82.9739, 25.3176], // Varanasi
            [82.9888, 25.3176],
            [82.9888, 25.3294],
            [82.9739, 25.3294],
            [82.9739, 25.3176],
          ],
        ],
      },
      properties: {
        name: 'Varanasi',
      },
    },
    // Add more features for other districts
  ],
};

class UttarPradeshMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={7}
        initialCenter={{
          lat: 26.8467, // Center of Uttar Pradesh
          lng: 80.9462,
        }}
      >
        {/* Render GeoJSON data */}
        {upDistrictsGeoJSON.features.map((feature, index) => (
          <Polygon
            key={index}
            paths={feature.geometry.coordinates}
            strokeColor="#FF0000"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#FF0000"
            fillOpacity={0.35}
            name={feature.properties.name}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB4jRJ25sj_mLjuPoL0v22ocrE-kS-PRZw', // Replace with your Google Maps API key
})(UttarPradeshMap);