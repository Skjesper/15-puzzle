export const PUZZLE_CONFIG = {
  ROWS: 4,
  COLS: 4,
  get TOTAL_TILES() {
    return this.ROWS * this.COLS;
  }
} as const;