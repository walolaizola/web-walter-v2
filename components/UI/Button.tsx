import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'outline-light' | 'white';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  type = 'button',
  fullWidth = false,
  disabled = false
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-lg px-8 py-3 focus:outline-none transform";
  
  const hoverEffects = disabled ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-1";
  
  const variants = {
    primary: `bg-brand-cyan text-brand-dark ${disabled ? "" : "hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"}`,
    secondary: `bg-brand-dark text-white ${disabled ? "" : "hover:bg-slate-800"} border border-slate-700`,
    outline: `bg-transparent text-brand-dark border-2 border-brand-dark ${disabled ? "" : "hover:bg-brand-dark hover:text-white"}`,
    'outline-light': `bg-transparent text-white border-2 border-white ${disabled ? "" : "hover:bg-white hover:text-brand-dark"}`,
    accent: `bg-brand-orange text-white ${disabled ? "" : "hover:bg-orange-600 hover:shadow-lg"}`,
    // White variant: White bg + Blue text by default -> Dark bg + White text on hover
    white: `bg-white text-blue-600 ${disabled ? "" : "hover:bg-brand-dark hover:text-white shadow-lg"}`
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${hoverEffects} ${className}`;

  if (to && !disabled) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;