interface LogoIconProps {
  size?: number;
  className?: string;
}

export default function LogoIcon({ size = 36, className = '' }: LogoIconProps) {
  return (
    <img
      src="/logo-mtl.png"
      alt="Morocco Travelland MTL Logo"
      className={className}
      style={{
        height: size,
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
        flexShrink: 0
      }}
    />
  );
}
