export const PUZZLE_CONFIG = {
  ROWS: 6,
  COLS: 5,
  get TOTAL_TILES() {
    return this.ROWS * this.COLS;
  }
} as const;