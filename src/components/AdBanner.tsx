import React from 'react';

interface AdBannerProps {
  position: 'top' | 'sidebar';
}

export function AdBanner({ position }: AdBannerProps) {
  const styles = {
    top: 'w-full h-24 bg-gray-100',
    sidebar: 'w-full h-[600px] bg-gray-100'
  };

  return (
    <div className={`${styles[position]} rounded-lg flex items-center justify-center`}>
      <p className="text-gray-400">Espaço Publicitário</p>
    </div>
  );
}