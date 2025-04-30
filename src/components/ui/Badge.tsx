import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full font-medium',
          {
            'bg-gray-100 text-gray-800': variant === 'default',
            'bg-primary-100 text-primary-800': variant === 'primary',
            'bg-secondary-100 text-secondary-800': variant === 'secondary',
            'bg-success-100 text-success-700': variant === 'success',
            'bg-warning-100 text-warning-700': variant === 'warning',
            'bg-error-100 text-error-700': variant === 'error',
            'border border-gray-200 bg-white': variant === 'outline',
            'px-2 py-0.5 text-xs': size === 'sm',
            'px-2.5 py-0.5 text-sm': size === 'md',
            'px-3 py-1 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;