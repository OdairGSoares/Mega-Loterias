import React from 'react';
import { AdSense } from './AdSense';

type AdSize = 
  | 'responsive'
  | 'banner' // 728x90
  | 'large-banner' // 970x90
  | 'skyscraper' // 160x600
  | 'large-skyscraper' // 300x600
  | 'rectangle' // 336x280
  | 'square' // 300x250
  | 'mobile' // 320x100

interface AdUnitProps {
  size: AdSize;
  className?: string;
}

const sizeStyles: Record<AdSize, { width: string, height: string }> = {
  'responsive': { width: '100%', height: '250px' },
  'banner': { width: '728px', height: '90px' },
  'large-banner': { width: '970px', height: '90px' },
  'skyscraper': { width: '160px', height: '600px' },
  'large-skyscraper': { width: '300px', height: '600px' },
  'rectangle': { width: '336px', height: '280px' },
  'square': { width: '300px', height: '250px' },
  'mobile': { width: '320px', height: '100px' }
};

// Mapeamento de slots do AdSense para cada tamanho
const adSlots: Record<AdSize, string> = {
  'responsive': '2845929889',
  'banner': '2845929889',
  'large-banner': '2845929889',
  'skyscraper': '2845929889',
  'large-skyscraper': '2845929889',
  'rectangle': '2845929889',
  'square': '2845929889',
  'mobile': '2845929889'
};

export function AdUnit({ size, className = '' }: AdUnitProps) {
  const style = {
    ...sizeStyles[size],
    maxWidth: '100%'
  };

  return (
    <div 
      className={`ad-unit ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '0.75rem',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}
    >
      <AdSense
        style={style}
        adSlot={adSlots[size]}
        adFormat={size === 'responsive' ? 'auto' : undefined}
      />
    </div>
  );
}