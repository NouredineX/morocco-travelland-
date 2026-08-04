interface LogoIconProps {
  size?: number;
  className?: string;
}

export default function LogoIcon({ size = 36, className = '' }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`logo-icon-svg ${className}`}
      style={{ flexShrink: 0, display: 'block' }}
    >
      <defs>
        {/* Main Moroccan Terracotta-Orange to Golden-Yellow Gradient */}
        <linearGradient id="logo-arch-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-primary, #63B559)" />
          <stop offset="100%" stopColor="var(--color-accent, #83c67c)" />
        </linearGradient>
        {/* Golden Highlight Gradient for Compass Star */}
        <linearGradient id="logo-star-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="var(--color-accent-light, #a3df9c)" />
        </linearGradient>
      </defs>

      {/* Passport Travel Seal Outer Circular border */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="url(#logo-arch-grad)"
        strokeWidth="2"
        strokeDasharray="4 3"
        opacity="0.85"
      />
      <circle
        cx="50"
        cy="50"
        r="41"
        stroke="url(#logo-arch-grad)"
        strokeWidth="1"
        opacity="0.35"
      />

      {/* Moroccan Horseshoe Arch Silhouette */}
      <path
        d="M 32 75 
           L 32 46 
           C 32 30, 40 22, 50 16 
           C 60 22, 68 30, 68 46 
           L 68 75 
           Z"
        fill="url(#logo-arch-grad)"
      />

      {/* Sahara Sand Dunes silhouettes inside the arch */}
      <path
        d="M 32 75 
           Q 46 62, 54 68 
           T 68 75 
           Z"
        fill="rgba(255, 255, 255, 0.15)"
      />
      <path
        d="M 40 75 
           Q 52 68, 60 71 
           T 68 75 
           Z"
        fill="rgba(255, 255, 255, 0.1)"
      />

      {/* Golden Rising Sun inside the arch */}
      <circle
        cx="50"
        cy="48"
        r="8"
        fill="#ffffff"
        opacity="0.9"
      />

      {/* Travel Compass Rose / 8-pointed Moroccan Star (Rub el Hizb) */}
      {/* Vertical and Horizontal points */}
      <path
        d="M 50 25 L 52 30 L 57 32 L 52 34 L 50 39 L 48 34 L 43 32 L 48 30 Z"
        fill="url(#logo-star-grad)"
      />
      {/* Diagonal points */}
      <path
        d="M 50 32 L 53.5 28.5 L 53.5 35.5 L 46.5 35.5 L 46.5 28.5 Z"
        fill="url(#logo-star-grad)"
        opacity="0.8"
      />

      {/* Small Pointer Anchor at the very top of seal */}
      <path
        d="M 50 13 L 53 22 L 50 20 L 47 22 Z"
        fill="#ffffff"
      />
    </svg>
  );
}
