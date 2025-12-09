
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Hotspot } from '../types';

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  altText: string;
  hotspots?: Hotspot[];
}

const ImageZoomModal: React.FC<ImageZoomModalProps> = ({ isOpen, onClose, imageSrc, altText, hotspots }) => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in p-4" onClick={onClose}>
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2 bg-black/50 rounded-full"
      >
        <X size={32} />
      </button>

      <div className="relative max-w-6xl w-full h-full max-h-[90vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-fit h-fit rounded-lg shadow-2xl border border-white/10 group bg-black">
          <img 
            src={imageSrc} 
            alt={altText} 
            className="max-w-full max-h-[85vh] object-contain block"
          />
          
          {/* Hotspots Layer */}
          {hotspots && hotspots.map((spot, index) => {
            // Determine position logic to keep tooltip inside
            const isTooRight = spot.x > 70;
            const isTooLeft = spot.x < 30;
            const isTooBottom = spot.y > 70;
            const isTooTop = spot.y < 30;

            let tooltipClasses = "absolute w-64 p-4 bg-slate-900/95 text-white text-sm rounded-xl border border-academic-accent/30 shadow-2xl backdrop-blur-sm transition-all duration-300 pointer-events-none z-30";
            let triangleClasses = "absolute border-8 border-transparent";
            
            // X-Axis Alignment
            if (isTooRight) {
              tooltipClasses += " right-full mr-3 top-1/2 -translate-y-1/2";
              triangleClasses += " left-full top-1/2 -mt-2 border-l-slate-900/95";
            } else if (isTooLeft) {
              tooltipClasses += " left-full ml-3 top-1/2 -translate-y-1/2";
              triangleClasses += " right-full top-1/2 -mt-2 border-r-slate-900/95";
            } else if (isTooBottom) {
              tooltipClasses += " bottom-full mb-3 left-1/2 -translate-x-1/2";
              triangleClasses += " top-full left-1/2 -ml-2 border-t-slate-900/95";
            } else {
               // Default (Top or Center) -> Show below if top, show above otherwise
               if (isTooTop) {
                 tooltipClasses += " top-full mt-3 left-1/2 -translate-x-1/2";
                 triangleClasses += " bottom-full left-1/2 -ml-2 border-b-slate-900/95";
               } else {
                 tooltipClasses += " bottom-full mb-3 left-1/2 -translate-x-1/2";
                 triangleClasses += " top-full left-1/2 -ml-2 border-t-slate-900/95";
               }
            }

            return (
              <div 
                key={index}
                className="absolute w-8 h-8 -ml-4 -mt-4 cursor-pointer z-20 group/spot"
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                onMouseEnter={() => setActiveHotspot(index)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                <div className="w-full h-full rounded-full bg-academic-accent/80 animate-ping absolute inset-0"></div>
                <div className="w-full h-full rounded-full bg-academic-accent border-2 border-white relative flex items-center justify-center shadow-lg transform hover:scale-125 transition-transform">
                  <span className="text-black font-bold text-xs">{index + 1}</span>
                </div>

                {/* Tooltip */}
                <div className={`${tooltipClasses} ${activeHotspot === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <h4 className="font-bold text-academic-accent mb-1 text-right" dir="auto">{spot.label}</h4>
                  <p className="text-slate-300 text-xs leading-relaxed text-right" dir="auto">{spot.text}</p>
                  <div className={triangleClasses}></div>
                </div>
              </div>
            );
          })}

          {/* Zoom Hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
             Explore anatomical features
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageZoomModal;
