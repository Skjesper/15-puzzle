export const PUZZLE_CONFIG = {
  ROWS: 2,
  COLS: 2,
  get TOTAL_TILES() {
    return this.ROWS * this.COLS;
  }
} as const;