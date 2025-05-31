import styles from './Button.module.css';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'm' | 'l';
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'm',
    onClick,
    disabled = false
}) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
       disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;