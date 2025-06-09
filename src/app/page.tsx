'use client';

import Box from '@/components/Puzzle/Box/Box';
import Button from '@/components/ui/Button/Button';
import Modal from '@/components/ui/Modal/Modal';
import styles from './page.module.css';
import { usePuzzleGame } from '@/hooks/usePuzzleGame';

export default function Home() {
  const {
    grid,
    isModalOpen,
    setIsModalOpen,
    shuffleGrid,
    handleTileClick
  } = usePuzzleGame();

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
              aria-label={value === 0 ? 'Empty space' : `Tile ${value}`}
            >
              {value === 0 ? '' : value}
            </Button>
          ))}
        </Box>
        <Button 
          variant='l' 
          onClick={shuffleGrid}
          aria-label="Shuffle puzzle tiles"
        >
          Randomize
        </Button>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="You solved the puzzle!!!"
      >
        <Button 
          variant='s' 
          onClick={shuffleGrid}
          aria-label="Start a new puzzle game"
        >
          Play again
        </Button>
      </Modal>
    </div>
  );
}