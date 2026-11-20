import React from 'react';

interface ExpiryLogoProps {
  variant?: 'primary' | 'reversed' | 'compact';
  showTagline?: boolean;
  className?: string;
}

/**
 * Brand logo exported verbatim from Figma Brand Guidelines v2 (Clock-e symbol + wordmark).
 */
export const ExpiryLogo: React.FC<ExpiryLogoProps> = ({
  variant = 'primary',
  showTagline = false,
  className = '',
}) => {
  const isReversed = variant === 'reversed';
  const symbolColor = isReversed ? '#FFFFFF' : '#D43A52';
  const textColor = isReversed ? '#FFFFFF' : '#2D2524';
  const taglineColor = isReversed ? 'rgba(255,255,255,0.86)' : '#625653';
  const size = variant === 'compact' ? 24 : 34;

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <path
          d="M21.42 20.16C19.32 22.96 16.24 23.94 13.16 23.24C8.68 22.4 6.16 18.9 6.16 15.12C6.16 10.78 9.38 7.28 13.86 7C18.06 6.58 21 9.1 21.84 12.32C22.26 13.58 21.98 14.28 21.28 14.42H11.06"
          stroke={symbolColor}
          strokeWidth="2.66"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.48 7C18.62 4.62 20.02 3.5 22.26 2.94C21.98 5.18 20.72 6.44 18.48 7Z"
          fill={symbolColor}
        />
        <path
          d="M13.86 14.42L12.18 11.34"
          stroke={symbolColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className={
            variant === 'compact'
              ? 'text-lg font-extrabold tracking-tight'
              : 'text-2xl font-extrabold tracking-tight'
          }
          style={{ color: textColor }}
        >
          Expiry
        </span>
        {showTagline && (
          <span
            className="mt-1 text-xs font-semibold tracking-wide"
            style={{ color: taglineColor }}
          >
            Biết hạn. Dùng kịp.
          </span>
        )}
      </div>
    </div>
  );
};
