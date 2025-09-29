import type { HTMLAttributes } from 'react';

import clsx from 'clsx';

type DeviderProps = {
  text?: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const Devider = ({ text, className, ...props }: DeviderProps) => (
  <div
    {...props}
    className={clsx(
      'w-full flex items-center justify-center text-white py-0.5 before:content-[""] before:w-full before:h-[1px] before:bg-gray-900 after:content-[""] after:w-full after:h-[1px] after:bg-gray-900',
      className
    )}
    aria-hidden="true"
  >
    {text && <span className="px-2">{text}</span>}
  </div>
);
