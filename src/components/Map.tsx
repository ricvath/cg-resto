
import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=YOUR_KEY_HERE', // Replace with your key
      center: [-4.8857, 36.5092], // Marbella coordinates
      zoom: 14
    });

    // Add marker for Cortes Garden
    const marker = new maplibregl.Marker()
      .setLngLat([-4.8857, 36.5092])
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new maplibregl.NavigationControl());

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div ref={mapContainer} className="h-[400px] w-full rounded-lg shadow-lg" />
  );
};

export default Map;
