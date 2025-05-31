'use client';

import Box from '@/components/Puzzle/Box/Box';
import Button from '@/components/ui/Button/Button';
import styles from './page.module.css';
import { useState } from 'react';
import { PUZZLE_CONFIG } from '@/config/puzzle';

const { TOTAL_TILES, COLS } = PUZZLE_CONFIG;

export default function Home() {

 const createInitialGrid = (): number[] => {
   const grid: number[] = [];
   for (let i = 1; i < TOTAL_TILES; i++) {
     grid.push(i);
   }
   grid.push(0); 
   return grid;
 };

 const [grid, setGrid] = useState<number[]>(createInitialGrid());

const handleTileClick = (index: number) => {
  const emptyIndex = grid.findIndex(value => value === 0);
  

  const distance = Math.abs(index - emptyIndex);
  const sameRow = Math.floor(index / COLS) === Math.floor(emptyIndex / COLS);
  const isAdjacent = (distance === 1 && sameRow) || distance === COLS;
  
  if (isAdjacent) {
    const newGrid = [...grid];
    newGrid[emptyIndex] = grid[index];
    newGrid[index] = 0;
    setGrid(newGrid);
  }
};

console.log('TOTAL_TILES:', TOTAL_TILES);
console.log('Grid length:', grid.length);


 return (
   <div className={styles.container}>
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
   </div>
 );
}