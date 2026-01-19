type BadgeVariant = 'default' | 'outline' | 'accent' | 'success';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
    variant?: BadgeVariant;
    size?: BadgeSize;
    children: React.ReactNode;
    className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
    default: 'bg-summit-ash/50 text-summit-mist',
    outline: 'bg-transparent border border-summit-ash text-summit-mist',
    accent: 'bg-ember-500/10 text-ember-500 border border-ember-500/30',
    success: 'bg-forest-600/10 text-forest-400 border border-forest-500/30',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-3 py-1 text-xs',
};

// Badge component -------------------------------

export function Badge({
    variant = 'default',
    size = 'sm',
    children,
    className = ''
}: BadgeProps) {
    return (
<span
      className={`
        inline-flex items-center
        font-semibold tracking-tactical uppercase
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </span>
    )
}

export function SectionNumber({ number }: { number: string | number }) {
  return (
    <span className="font-oswald text-sm font-medium text-ember-500 px-3 py-1.5 border border-ember-500">
      {typeof number === 'number' ? number.toString().padStart(2, '0') : number}
    </span>
  );
}