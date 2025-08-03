import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdSenseProps {
  style?: React.CSSProperties;
  className?: string;
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'vertical';
}

export function AdSense({ style, className, adSlot, adFormat = 'auto' }: AdSenseProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className || ''}`}
      style={{
        display: 'block',
        overflow: 'hidden',
        ...style
      }}
      data-ad-client="ca-pub-1175279476727123"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    />
  );
} 