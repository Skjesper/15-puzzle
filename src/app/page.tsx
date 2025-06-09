'use client';

import Box from '@/components/Puzzle/Box/Box';
import Button from '@/components/ui/Button/Button';
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import { PUZZLE_CONFIG } from '@/config/puzzle';

const { TOTAL_TILES, COLS } = PUZZLE_CONFIG;

export default function Home() {
  const shuffleArray = (array: number[]): number[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  const createInitialGrid = (): number[] => {
    const grid: number[] = [];
    for (let i = 1; i < TOTAL_TILES; i++) {
      grid.push(i);
    }
    grid.push(0);
    return grid; 
  };

  const checkWin = (currentGrid: number[]): boolean => {
    return currentGrid.every((value, index) => 
      index === currentGrid.length - 1 ? value === 0 : value === index + 1
    );
  };
  
  const [grid, setGrid] = useState<number[]>(createInitialGrid());
  
  useEffect(() => {
    const orderedGrid = [];
    for (let i = 1; i < TOTAL_TILES; i++) {
      orderedGrid.push(i);
    }
    orderedGrid.push(0);
    setGrid(shuffleArray(orderedGrid));
  }, []);

  const shuffleGrid = () => {
    setGrid(shuffleArray([...grid]));
  };

const handleTileClick = (index: number) => {
  const emptyIndex = grid.findIndex(value => value === 0);
  
  const clickedRow = Math.floor(index / COLS);
  const emptyRow = Math.floor(emptyIndex / COLS);
  const clickedCol = index % COLS;
  const emptyCol = emptyIndex % COLS;
  
  if (clickedRow === emptyRow) {
    const newGrid = [...grid];
    const rowStart = clickedRow * COLS;
    
    if (clickedCol < emptyCol) {
      for (let i = emptyCol - 1; i >= clickedCol; i--) {
        newGrid[rowStart + i + 1] = newGrid[rowStart + i];
      }
      newGrid[index] = 0;
    } else {
      for (let i = emptyCol + 1; i <= clickedCol; i++) {
        newGrid[rowStart + i - 1] = newGrid[rowStart + i];
      }
      newGrid[index] = 0;
    }
    
    setGrid(newGrid);
    
    if (checkWin(newGrid)) {
      alert('Congratz, you solved a very complicated puzzle! Press the randomize button to play again');
    }
    return;
  }
  
  if (clickedCol === emptyCol) {
    const newGrid = [...grid];
    
    if (clickedRow < emptyRow) {
      for (let i = emptyRow - 1; i >= clickedRow; i--) {
        newGrid[(i + 1) * COLS + clickedCol] = newGrid[i * COLS + clickedCol];
      }
      newGrid[index] = 0;
    } else {
      for (let i = emptyRow + 1; i <= clickedRow; i++) {
        newGrid[(i - 1) * COLS + clickedCol] = newGrid[i * COLS + clickedCol];
      }
      newGrid[index] = 0;
    }
    
    setGrid(newGrid);
    
    if (checkWin(newGrid)) {
      alert('Congratz, you solved a very complicated puzzle! Press the randomize button to play again');
    }
    return;
  }
  
  const distance = Math.abs(index - emptyIndex);
  const sameRow = clickedRow === emptyRow;
  const isAdjacent = (distance === 1 && sameRow) || distance === COLS;
  
  if (isAdjacent) {
    const newGrid = [...grid];
    newGrid[emptyIndex] = grid[index];
    newGrid[index] = 0;
    setGrid(newGrid);

    if (checkWin(newGrid)) {
      alert('Congratz, you solved a very complicated puzzle! Press the randomize button to play again');
    }
  }
};

  return (
    <div className={styles.container}>
      <div className={styles.gameContainer}>
        <Box>
          {grid.map((value, index) => (
            <Button 
              key={index}
              variant='m'
              onClick={() => handleTileClick(index)}
              disabled={value === 0}
            >
              {value === 0 ? '' : value}
            </Button>
          ))}
        </Box>
        <Button variant='l' onClick={shuffleGrid}>Randomize</Button>
      </div>
    </div>
  );
}