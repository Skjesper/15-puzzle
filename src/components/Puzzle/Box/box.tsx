import styles from '@/components/Puzzle/Box/Box.module.css';
import React from 'react';
import { PUZZLE_CONFIG } from '@/config/puzzle';

const { ROWS, COLS } = PUZZLE_CONFIG;

interface BoxProps {
    children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
    const boxStyle = {
        '--grid-cols': COLS,
        '--grid-rows': ROWS,
    } as React.CSSProperties;

    return (
        <div 
            className={styles.box} 
            style={boxStyle}
            role="grid"
            aria-label="Sliding puzzle grid"
        >
            {children}
        </div>
    );
};

export default Box;