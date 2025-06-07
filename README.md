# REM Waste - Skip Size Selection

A modern React + TypeScript + Vite application for REM Waste's skip size selection process. This application provides a streamlined, user-friendly interface for customers to select and order skips based on their needs.

## Setup and Run Instructions

### Prerequisites

- Node.js (v22+ recommended)
- Yarn (or npm if you must, pnpm or bun if you're feeling adventurous)

### Install dependencies

```bash
yarn
```

### Start the development server

```bash
yarn dev
```

The app will be available at [http://localhost:3001](http://localhost:3001) by default. Feel free to change the port in `vite.config.ts` if you need to.

### Build for production

```bash
yarn build
```

### Production preview

```bash
yarn preview
```

### Lint the code

```bash
yarn lint --fix
```

## Features

- **Modern Skip Size Selection**: A redesigned skip size selection screen that fetches skip options from an API
- **Responsive Design**: Fully responsive UI that works across all device sizes
- **Type-Safe Development**: Built with TypeScript for robust type checking and better developer experience
- **State Management**: Uses Redux Toolkit with RTK Query for efficient state management and API calls
- **Material UI**: Implements Material UI components with custom theming for a polished look and feel

## Skip Size Selection Redesign

### Overview

The skip size selection screen has been redesigned to fetch skip options from an API instead of using hardcoded values. This approach provides several benefits:

1. **Dynamic Data**: Skip options are now fetched from an API endpoint, allowing for real-time updates to prices, availability, and skip specifications
2. **Location-Based Options**: The API supports location-based skip options (currently configured for NR32/Lowestoft area)
3. **Rich Skip Information**: Each skip option includes:
   - Size (in yards)
   - Hire period duration
   - Price (before VAT)
   - Road allowance status
   - Visual representation with images

### Technical Implementation

#### API Integration

- Uses RTK Query for efficient API calls and caching
- Endpoint: `/skips/by-location` with postcode and area parameters
- Transforms API response to a clean, frontend-friendly format

#### UI Components

- `SkipSize`: Main container component that handles data fetching and layout
- `SkipSizeItem`: Reusable component for individual skip options with:
  - Skip image with fallback
  - Size and price information
  - Hire period details
  - Road allowance warning (when applicable)
  - Interactive selection with visual feedback

#### State Management

- Redux store manages:
  - Selected skip ID
  - Current step in the order flow
  - Skip options data (via RTK Query)

#### User Experience

- Clear visual hierarchy
- Responsive grid layout
- Interactive hover and selection states
- Loading and error states
- Smooth transitions and animations

## Development Notes

### Key Dependencies

- React 18+
- TypeScript
- Vite
- Material UI
- Redux Toolkit + RTK Query
- React Router

### Project Structure

```
src/
├── components/         # Reusable UI components
├── constants/         # Application constants
├── hooks/            # Custom React hooks
├── interfaces/       # TypeScript interfaces
├── pages/           # Page components
├── slices/          # Redux slices
├── store/           # Redux store configuration
├── theme/           # Material UI theme customization
└── utils/           # Utility functions
```

### API Integration

The application integrates with a Supabase backend for:

- Skip options data
- Skip images storage
- Location-based pricing

### Future Improvements

1. **Enhanced Location Support**: Expand location-based skip options to cover more areas
2. **Real-time Availability**: Add real-time skip availability checking
3. **Advanced Filtering**: Implement filtering by skip size, price range, or availability
4. **Booking Calendar**: Add a calendar view for skip delivery scheduling
5. **User Accounts**: Implement user accounts for order history and saved preferences
6. **Payment Integration**: Add secure payment processing
7. **Order Tracking**: Implement order status tracking
8. **Accessibility**: Further improve accessibility compliance
9. **Testing**: Add comprehensive test coverage
