import styles from './Button.module.css';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 's' | 'm' | 'l';
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    'aria-label'?: string;
    'aria-describedby'?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'm',
    onClick,
    disabled = false,
    type = 'button',
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
    className
}) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${className || ''}`.trim();

  return (
    <button 
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
    >
      {children}
    </button>
  );
};

export default Button;
