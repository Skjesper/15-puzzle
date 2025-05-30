'use client';

import Box from '@/components/Puzzle/Box/Box';
import Button from '@/components/ui/Button/Button';
import styles from './page.module.css';
import { useState } from 'react';
import { PUZZLE_CONFIG } from '@/config/puzzle';

const { TOTAL_TILES } = PUZZLE_CONFIG;

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
   console.log(`Klickade på position ${index}`);
 };

 return (
   <div className={styles.container}>
     <Box>
       {grid.map((value, index) => (
         <Button 
           key={index}
           variant='m'
           onClick={() => handleTileClick(index)}
         >
           {value === 0 ? '' : value}
         </Button>
       ))}
     </Box>
   </div>
 );
}