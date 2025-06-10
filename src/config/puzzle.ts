export const PUZZLE_CONFIG = {
  ROWS: 3,
  COLS: 5,
  get TOTAL_TILES() {
    return this.ROWS * this.COLS;
  }
} as const;