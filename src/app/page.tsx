
import Box from '@/components/Puzzle/Box/Box';
import Button from '@/components/ui/Button/Button';
import styles from './page.module.css';
import { useState } from 'react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Box>
        <Button variant='m'>1</Button>
        <Button variant='m'>1</Button>
        <Button variant='m'>1</Button>
        <Button variant='m'>1</Button>
        <Button variant='m'>1</Button>
        <Button variant='m'>1</Button>
        <Button variant='m'>1</Button>
        <Button variant='m'>1</Button>
        <Button variant='m'>1</Button>
        <Button variant='m'>1</Button>
        <Button variant='m'>1</Button>
        <Button variant='m'>1</Button>
        <Button variant='m'>1</Button>
        <Button variant='m'>1</Button>
        <Button variant='m'>1</Button>
      </Box>
    </div>
  );
}