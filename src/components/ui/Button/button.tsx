import styles from './button.module.css';
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'desktop' | 'mobile';
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'mobile',
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