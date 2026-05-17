import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
}) => {
  const baseClasses =
    `bg-gradient-to-r from-[#7D58EE] to-[#2B117E] !text-[19.2px]
    duration-500 hover:scale-105 !text-white !font-normal 
    !px-6 !py-3 !rounded-[16px] shadow transition`;
  
  const variantClasses = {
    primary: 'bg-white text-black hover:bg-gray-100 focus:ring-white',
    secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black focus:ring-white',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-black focus:ring-white',
    ghost: 'text-white hover:bg-white/10 focus:ring-white',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
