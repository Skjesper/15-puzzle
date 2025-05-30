import styles from '@/components/Puzzle/Box/Box.module.css';
import React from 'react';

interface BoxProps {

    children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
    return (
        <div className={styles.box}>
            {children}
        </div>
    );
};

export default Box;