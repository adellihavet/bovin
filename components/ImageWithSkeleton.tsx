
import React, { useState } from 'react';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({ src, alt, className, containerClassName }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Skeleton Loader */}
      <div 
        className={`absolute inset-0 bg-slate-700 animate-pulse transition-opacity duration-500 z-10 ${loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      ></div>
      
      <img 
        src={src} 
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onError={(e) => {
           (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Dairy_Cattle_-_geograph.org.uk_-_1423764.jpg/640px-Dairy_Cattle_-_geograph.org.uk_-_1423764.jpg"; 
           setLoaded(true);
        }}
      />
    </div>
  );
};

export default ImageWithSkeleton;
