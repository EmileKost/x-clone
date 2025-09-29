import type { HTMLAttributes } from 'react';

export const AuthHeader = ({
  title,
  ...props
}: { title: string } & HTMLAttributes<HTMLElement>) => {
  return (
    <header className="my-12" {...props}>
      <h1 className="text-7xl">{title}</h1>
    </header>
  );
};
