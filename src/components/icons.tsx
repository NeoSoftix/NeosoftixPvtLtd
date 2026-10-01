// Shared stroke icons — use these instead of inlining the same SVG in multiple components.
type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

function createIcon(viewBox: string, d: string, defaultStroke: number) {
  return function Icon({ size = 14, strokeWidth = defaultStroke, className }: IconProps) {
    return (
      <svg width={size} height={size} viewBox={viewBox} fill="none" className={className} aria-hidden>
        <path
          d={d}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
}

export const ArrowRightIcon = createIcon("0 0 16 16", "M2.5 8H13.5M13.5 8L8.5 3M13.5 8L8.5 13", 2);
export const ArrowUpRightIcon = createIcon("0 0 24 24", "M7 7l10 10M17 7v10H7", 2.2);
export const CheckIcon = createIcon("0 0 16 16", "M3 8.5L6.2 11.5L13 4.5", 2);
export const ChevronDownIcon = createIcon("0 0 24 24", "M19 9l-7 7-7-7", 2.5);
export const CloseIcon = createIcon("0 0 18 18", "M1 1L17 17M17 1L1 17", 1.5);
