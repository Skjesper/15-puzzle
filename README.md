# N-Puzzle

A sliding puzzle game built with Next.js and TypeScript. Click tiles to move them into the empty space and solve the puzzle.

## Features

- Interactive sliding puzzle grid (3×5 by default)
- Configurable puzzle size via config file
- Click tiles to move entire rows or columns
- Auto-detection when puzzle is solved
- Responsive design for all screen sizes
- Randomize button to shuffle the puzzle

## Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd n-pussel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## How to Play

- Click any tile to move it toward the empty space
- If you click a tile in the same row or column as the empty space, all tiles between will shift
- Arrange all numbered tiles in order (1-14) with the empty space in the bottom right
- Use the "Randomize" button to shuffle and start over

## Configuration

To change the puzzle size, edit `src/config/puzzle.ts`:

```typescript
export const PUZZLE_CONFIG = {
  ROWS: 3,    // Number of rows
  COLS: 5,    // Number of columns
  get TOTAL_TILES() {
    return this.ROWS * this.COLS;
  }
} as const;
```

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- CSS Modules
