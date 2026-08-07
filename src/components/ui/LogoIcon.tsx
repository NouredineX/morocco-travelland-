interface LogoIconProps {
  size?: number;
  className?: string;
}

export default function LogoIcon({ size = 36, className = '' }: LogoIconProps) {
  return (
    <img
      src="/logo-mtl.webp"
      alt="Morocco Travel Land MTL Logo"
      className={className}
      width={size}
      height={size}
      style={{
        height: size,
        width: size,
        objectFit: 'contain',
        display: 'block',
        flexShrink: 0
      }}
    />
  );
}
