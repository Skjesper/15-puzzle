export const PUZZLE_CONFIG = {
  ROWS: 6,
  COLS: 6,
  get TOTAL_TILES() {
    return this.ROWS * this.COLS;
  }
} as const;