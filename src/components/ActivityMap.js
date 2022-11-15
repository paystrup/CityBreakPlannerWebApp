import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken =
  "pk.eyJ1IjoicGF5c3RydXAiLCJhIjoiY2wwcWVhbzVqMjljazNrbjVvZmh4OWRtZyJ9.QfpHoU7VMkQgz5qvlcvGaQ";

export default function ActivityMap({ data }) {
    const mapContainerRef = useRef(null);

    const dataMarker = [data.Longitude, data.Latitude]

    // Initialize map when component mounts
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/light-v10",
        center: dataMarker,
        zoom: 15,
        pitch: 0, 
        bearing: 0
      });
  
      // Create default markers
      new mapboxgl.Marker().setLngLat(dataMarker).addTo(map)
  
      // Add navigation control (the +/- zoom buttons)
      map.addControl(new mapboxgl.NavigationControl(), "top-right");

      map.scrollZoom.disable();
  
      // Clean up on unmount
      return () => map.remove();
    }, [data]);
    
    return (
        <div id="map" className="map-container" ref={mapContainerRef} />
    )
}
