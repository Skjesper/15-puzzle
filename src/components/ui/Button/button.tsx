import styles from './Button.module.css';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'm' | 'l';
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'm',
    onClick
}) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;