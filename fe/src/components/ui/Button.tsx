// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles =
    'font-bold py-2 px-4 rounded transition-colors duration-200';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-700',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
