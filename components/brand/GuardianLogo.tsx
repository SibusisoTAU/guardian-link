import React from 'react';

export const GuardianLogo: React.FC<{ size?: number; className?: string }> = ({
  size = 32,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Castle Crown */}
    <rect x="8" y="8" width="8" height="8" fill="#15803d" />
    <rect x="20" y="8" width="8" height="8" fill="#15803d" />
    <rect x="32" y="8" width="8" height="8" fill="#15803d" />

    {/* Circle G */}
    <circle cx="20" cy="32" r="14" stroke="#15803d" strokeWidth="3" fill="none" />
    <rect x="20" y="20" width="8" height="12" fill="#FF9900" />

    {/* Text Placeholder */}
    <text
      x="42"
      y="36"
      fontSize="12"
      fontWeight="bold"
      fill="#15803d"
      fontFamily="sans-serif"
    >
      GL
    </text>
  </svg>
);

export const GuardianLogoFull: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <GuardianLogo size={40} />
    <div>
      <div className="font-black text-2xl text-emerald-700">GUARDIAN</div>
      <div className="font-black text-lg text-orange-500">LINK</div>
      <div className="text-xs text-emerald-700 font-semibold">Connecting businesses. Protecting people.</div>
    </div>
  </div>
);
