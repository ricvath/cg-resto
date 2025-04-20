import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const coordinates = {
    lng: -4.951441,
    lat: 36.500897
  };

  const handleOpenMaps = () => {
    // Check if the user is on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    const address = encodeURIComponent("Urb. La Dama de Noche, Bloque 15, 29660, Marbella");
    
    if (isIOS) {
      // Open Apple Maps
      window.open(`maps://maps.apple.com/?q=${address}&ll=${coordinates.lat},${coordinates.lng}`);
    } else {
      // Open Google Maps
      window.open(`https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`);
    }
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://api.maptiler.com/maps/streets-v2-light/style.json?key=yE0MnEy8Yj2W5ZhXuAZS',
      center: [coordinates.lng, coordinates.lat],
      zoom: 14,
      scrollZoom: false // Disable default scroll zoom
    });

    // Add marker for Cortes Garden
    const marker = new maplibregl.Marker()
      .setLngLat([coordinates.lng, coordinates.lat])
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new maplibregl.NavigationControl());

    // Handle scroll events
    const handleWheel = (e: WheelEvent) => {
      if (!map.current) return;
      
      // Check if Cmd (Mac) or Ctrl (Windows) is pressed
      if (e.metaKey || e.ctrlKey) {
        e.preventDefault();
        // Zoom in or out based on scroll direction
        const zoomDelta = -e.deltaY * 0.01;
        const currentZoom = map.current.getZoom();
        map.current.easeTo({
          zoom: currentZoom + zoomDelta,
          duration: 50
        });
      }
    };

    // Add wheel event listener
    mapContainer.current.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      map.current?.remove();
      mapContainer.current?.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="relative">
      <div ref={mapContainer} className="h-[400px] w-full border-foreground border-2" />
      <Button
        onClick={handleOpenMaps}
        className="absolute bottom-3 left-3 bg-primary text-primary-foreground hover:bg-primary/80 shadow-md"
      >
        <ExternalLink className="w-4 h-4 mr-1" />
        Open in Maps
      </Button>
    </div>
  );
};

export default Map;
