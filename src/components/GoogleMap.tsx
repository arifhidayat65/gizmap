'use client'

import { useEffect, useRef } from 'react'

interface MapOptions {
  zoom: number;
  center: { lat: number; lng: number };
  mapId?: string;
  styles?: Array<{
    featureType: string;
    elementType: string;
    stylers: Array<{ [key: string]: string }>;
  }>;
}

interface MarkerOptions {
  position: { lat: number; lng: number };
  map: unknown;
  title?: string;
}

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize the map
    const initMap = () => {
      if (mapRef.current && window.google) {
        // Coordinates for Jakarta (example location)
        const location = { lat: -6.2088, lng: 106.8456 }
        
        const mapOptions: MapOptions = {
          zoom: 15,
          center: location,
          mapId: 'YOUR_MAP_ID', // Optional: for styled maps
          styles: [
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [{ color: "#242f3e" }]
            },
            {
              featureType: "all",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#242f3e" }]
            },
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [{ color: "#746855" }]
            }
          ]
        }

        const map = new window.google.maps.Map(mapRef.current, mapOptions)

        // Add a marker
        const markerOptions: MarkerOptions = {
          position: location,
          map: map,
          title: "Gsm Promo Headquarters"
        }
        new window.google.maps.Marker(markerOptions)
      }
    }

    // Assign initMap to window object
    window.initMap = initMap

    // Load Google Maps script
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&libraries=places&callback=initMap`
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    return () => {
      // Cleanup
      document.head.removeChild(script)
      window.initMap = () => {
        // Empty function to prevent errors
      }
    }
  }, [])

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-lg shadow-lg"
      style={{ border: '2px solid var(--primary-color)' }}
    />
  )
}

export default GoogleMap
