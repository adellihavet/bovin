
import React, { useEffect, useRef } from 'react';
import * as L from 'leaflet';

interface AlgeriaMapProps {
  locations: {
    name: string;
    coordinates: [number, number];
    index: number;
    status: string;
    regionPolygon: [number, number][];
  }[];
  onSelect: (index: number) => void;
  selectedIndex: number | null;
}

const AlgeriaMap: React.FC<AlgeriaMapProps> = ({ locations, onSelect, selectedIndex }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const layersRef = useRef<L.LayerGroup>(L.layerGroup());

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
      // Initialize Map
      const map = L.map(mapContainerRef.current, {
        center: [35.5, 3.5], // Center of North Algeria
        zoom: 6,
        zoomControl: false,
        attributionControl: false
      });

      // Dark Theme Tiles (CartoDB Dark Matter)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19
      }).addTo(map);

      layersRef.current.addTo(map);
      mapInstanceRef.current = map;
    }
  }, []);

  // Update Markers & Polygons when locations change or selection changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    const layerGroup = layersRef.current;
    if (!map || !layerGroup) return;

    layerGroup.clearLayers();

    locations.forEach((loc) => {
      const isSelected = selectedIndex === loc.index;
      
      // 1. Draw Region Polygon
      if (loc.regionPolygon && loc.regionPolygon.length > 0) {
         const polygon = L.polygon(loc.regionPolygon as L.LatLngExpression[], {
            color: isSelected ? '#F59E0B' : '#3B82F6',
            weight: isSelected ? 2 : 1,
            fillColor: isSelected ? '#F59E0B' : '#3B82F6',
            fillOpacity: isSelected ? 0.2 : 0.05,
            dashArray: isSelected ? undefined : '5, 5'
         }).addTo(layerGroup);
         
         polygon.on('click', () => onSelect(loc.index));
      }

      // 2. Draw Marker
      const marker = L.circleMarker(loc.coordinates, {
        radius: isSelected ? 16 : 8, // Increased size on selection
        color: isSelected ? '#F59E0B' : '#3B82F6',
        fillColor: isSelected ? '#F59E0B' : '#3B82F6',
        fillOpacity: 0.9,
        weight: 3,
        className: 'transition-all duration-500'
      }).addTo(layerGroup);

      // 3. Rich Tooltip (Name + Status)
      const statusColor = loc.status.includes('Critical') || loc.status.includes('Critique') || loc.status.includes('حرجة') 
        ? '#EF4444' : '#F59E0B';

      const tooltipContent = `
        <div style="font-family: sans-serif; text-align: center; min-width: 120px;">
          <div style="color: #fff; font-weight: bold; font-size: 14px; margin-bottom: 4px;">${loc.name}</div>
          <div style="color: ${statusColor}; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border: 1px solid ${statusColor}; border-radius: 4px; padding: 2px 6px; display: inline-block;">${loc.status}</div>
        </div>
      `;

      marker.bindTooltip(tooltipContent, { 
         direction: 'top', 
         offset: [0, -15],
         opacity: 1,
         className: 'custom-map-tooltip bg-slate-900/90 border border-white/10'
      });

      marker.on('click', () => {
        onSelect(loc.index);
      });

      if (isSelected) {
        marker.openTooltip();
      }
    });

    // Zoom Logic (FlyTo)
    if (selectedIndex !== null) {
       const targetLoc = locations[selectedIndex];
       if (targetLoc) {
          map.flyTo(targetLoc.coordinates, 9, { duration: 1.5 });
       }
    } else {
       map.flyTo([35.5, 3.5], 6, { duration: 1.5 });
    }

  }, [locations, onSelect, selectedIndex]);

  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      <div ref={mapContainerRef} className="w-full h-full z-0" />
      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs text-slate-400 pointer-events-none z-[500]">
        Map data &copy; OpenStreetMap contributors & CartoDB
      </div>
      <style>{`
        .leaflet-tooltip.custom-map-tooltip {
          background-color: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .leaflet-tooltip-top:before {
          border-top-color: rgba(15, 23, 42, 0.9);
        }
      `}</style>
    </div>
  );
};

export default AlgeriaMap;
