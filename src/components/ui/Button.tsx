import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-ember-500 text-summit-charcoal hover:bg-ember-400 active:bg-ember-600 disabled:bg-summit-ash disabled:text-summit-mist',
    secondary: 'bg-transparent text-summit-cream border-2 border-summit-ash hover:border-ember-500 hover:text-ember-500 active:bg-ember-500/10',
    ghost: 'bg-transparent text-summit-cream hover:bg-summit-stone active:bg-summit-ash',
    text: 'bg-transparent text-ember-500 hover:text-ember-400 active:text-ember-600 p-0',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs gap-2',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-sm gap-3',
};

// Components -----------------------------------------------

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={`inline-flex items-center justify-center font-semibold tracking-wider uppercase transition-all duration-300 disabled:cursor-not-allowed ${variantStyles[variant]} ${variant !== 'text' ? sizeStyles[size] : ''} ${className}`}
        {...props}
      >
        {/* Loading Spinner */}
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}

        {/* Left Icon */}
        {!isLoading && leftIcon && (
          <span className="flex-shrink-0">{leftIcon}</span>
        )}

        {/* Button Text */}
        <span>{children}</span>

        {/* Right Icon */}
        {!isLoading && rightIcon && (
          <span className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

// helper funcs ------------------------------------------------

export const ArrowRight = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-300"
  >
    <path 
      d="M3 8H13M13 8L8 3M13 8L8 13" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const PlayIcon = () => (
  <svg 
    width="12" 
    height="12" 
    viewBox="0 0 12 12" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 1L10 6L2 11V1Z" />
  </svg>
);