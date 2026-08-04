interface LogoIconProps {
  size?: number;
  className?: string;
}

export default function LogoIcon({ size = 36, className = '' }: LogoIconProps) {
  return (
    <img
      src="/logo-mtl.jpg"
      alt="Morocco Travelland MTL Logo"
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover',
        display: 'block',
        flexShrink: 0
      }}
    />
  );
}
