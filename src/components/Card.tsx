import * as React from 'react';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function Card({
  children,
  className = '',
  onClick,
  ...rest
}: CardProps) {
  return (
    <div className={`card ${className}`} onClick={onClick} {...rest}>
      {children}
    </div>
  );
}
