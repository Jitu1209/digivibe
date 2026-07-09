import React from 'react';

export default function PartnerLogo({ name, className = "w-4 h-4" }) {
  const normalized = name.toLowerCase().trim();

  if (normalized.includes('google cloud')) {
    // GCP logo: cloud shape with colored arcs or Google Blue/Green
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
        <path d="M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" fill="#34A853"/>
      </svg>
    );
  }

  if (normalized.includes('meta ads')) {
    // Meta Loop Logo: blue infinity-like loop
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#0064E0' }}>
        <path d="M16.35 14.33c-.73.73-1.68 1.13-2.65 1.13-.97 0-1.92-.4-2.65-1.13l-1.05-1.05-1.05 1.05c-.73.73-1.68 1.13-2.65 1.13-.97 0-1.92-.4-2.65-1.13-.73-.73-1.13-1.68-1.13-2.65 0-.97.4-1.92 1.13-2.65.73-.73 1.68-1.13 2.65-1.13.97 0 1.92.4 2.65 1.13l1.05 1.05 1.05-1.05c.73-.73 1.68-1.13 2.65-1.13.97 0 1.92.4 2.65 1.13.73.73 1.13 1.68 1.13 2.65 0 .97-.4 1.92-1.13 2.65z" />
      </svg>
    );
  }

  if (normalized.includes('aws cloud')) {
    // AWS Arrow/Smile logo: Orange smile/arrow
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#FF9900' }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.29 14.29c-.38.38-.89.59-1.42.59s-1.04-.21-1.42-.59L6.5 12.33c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0l3.08 3.08 6.08-6.08c.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83l-7.03 7.03z" />
      </svg>
    );
  }

  if (normalized.includes('microsoft')) {
    // Microsoft: 4 squares (Red, Green, Blue, Yellow)
    return (
      <svg className={className} viewBox="0 0 23 23" fill="currentColor">
        <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022" />
        <rect x="11.5" y="0" width="10.5" height="10.5" fill="#7FBA00" />
        <rect x="0" y="11.5" width="10.5" height="10.5" fill="#00A4EF" />
        <rect x="11.5" y="11.5" width="10.5" height="10.5" fill="#FFB900" />
      </svg>
    );
  }

  if (normalized.includes('razorpay')) {
    // Razorpay: Slanted blue double ribbon/arrow
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#0B72E7' }}>
        <path d="M22.4 1.2c-.4-.4-1-.4-1.4 0L12 10.2 3 1.2c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L10.6 11.6l-9 9c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l9-9 9 9c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-9-9 9-9c.4-.4.4-1 0-1.4z" />
      </svg>
    );
  }

  if (normalized.includes('hubspot')) {
    // HubSpot Sprocket logo: Orange circle with spokes
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#FF7A59' }}>
        <path d="M18.8 9.7c.3.5.5 1.1.5 1.8 0 1.9-1.5 3.5-3.5 3.5s-3.5-1.6-3.5-3.5c0-.6.2-1.2.5-1.8L9.2 6.5C8.7 6.8 8.1 7 7.5 7 5.6 7 4 5.4 4 3.5S5.6 0 7.5 0c1.8 0 3.3 1.4 3.5 3.2L14.7 6C15.2 5.7 15.8 5.5 16.5 5.5c1.9 0 3.5 1.6 3.5 3.5 0 .3-.1.5-.2.7l3.2 3.2c.5-.3 1.1-.5 1.8-.5 1.9 0 3.5 1.6 3.5 3.5s-1.6 3.5-3.5 3.5-3.5-1.6-3.5-3.5c0-1.2.6-2.2 1.5-2.8L18.8 9.7z" />
      </svg>
    );
  }

  if (normalized.includes('vercel')) {
    // Vercel Triangle logo: Black triangle
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#000000' }}>
        <path d="M12 2L2 22h20L12 2z" />
      </svg>
    );
  }

  if (normalized.includes('shopify')) {
    // Shopify Logo: Green bag
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#96BF48' }}>
        <path d="M19.5 6h-3.25V4.5c0-1.38-1.12-2.5-2.5-2.5h-3.5c-1.38 0-2.5 1.12-2.5 2.5V6H4.5c-.83 0-1.5.67-1.5 1.5V19.5c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5V7.5c0-.83-.67-1.5-1.5-1.5zm-8.75-1.5c0-.28.22-.5.5-.5h3.5c.28 0 .5.22.5.5V6h-4.5V4.5zM12 17.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
      </svg>
    );
  }

  // Fallback Sparkles icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#8B5CF6' }}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
