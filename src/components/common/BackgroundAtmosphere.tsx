import React from 'react';
import { BrandLogo } from './BrandLogo';

export const BackgroundAtmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Dynamic Background Watermark Logo with high clarity vector geometry */}
      <BrandLogo isWatermark={true} />

      {/* Ambient Top Glow Orbs (Royal Amethyst & Imperial Gold Glow) */}
      <div className="absolute -top-40 left-1/4 w-[650px] h-[650px] bg-purple-600/12 rounded-full blur-[150px] mix-blend-screen" />
      <div className="absolute top-60 -right-40 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px] mix-blend-screen" />
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[160px] mix-blend-screen" />
      <div className="absolute bottom-20 right-1/4 w-[700px] h-[700px] bg-purple-700/10 rounded-full blur-[160px] mix-blend-screen" />

      {/* Subtle Engineering Grid Overlay with Royal Tint */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #c084fc 1px, transparent 1px),
            linear-gradient(to bottom, #c084fc 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />
    </div>
  );
};
