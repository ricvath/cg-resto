
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
      style: 'https://api.maptiler.com/maps/streets-v2-light/style.json?key=osJqt1lunU1203raWN2v',
      center: [-4.951441, 36.500897], // Marbella coordinates
      zoom: 12
    });

    // Add marker for Cortes Garden
    const marker = new maplibregl.Marker()
      .setLngLat([-4.951441, 36.500897])
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new maplibregl.NavigationControl());

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div ref={mapContainer} className="h-[400px] w-full rounded-lg border-black border-2" />
  );
};

export default Map;
