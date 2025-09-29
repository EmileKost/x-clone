import { HTMLAttributes, PropsWithChildren } from 'react';

import clsx from 'clsx';

type ButtonVariants = 'primary' | 'secondary' | 'danger';
type ButtonProps = {
  variant?: ButtonVariants;
} & PropsWithChildren &
  HTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) => {
  const styling: Record<ButtonVariants, string> = {
    primary:
      'bg-white-primary text-black-primary border-none hover:opacity-90 transition-colors',
    secondary:
      'bg-black-primary text-white-primary border border-white-primary hover:bg-black-600 transition-colors',
    danger: '',
  };

  return (
    <button
      {...props}
      className={clsx(
        styling[variant],
        'px-8 py-2.5 rounded-full text-base font-bold cursor-pointer w-full max-w-full',
        className
      )}
    >
      {children}
    </button>
  );
};
