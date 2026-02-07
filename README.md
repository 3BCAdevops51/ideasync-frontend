# IdeaSync Frontend

A modern React-based frontend application for capturing, organizing, and tracking ideas. Built with React 18, TypeScript, and Vite.

#summary

The IdeaSync Frontend was successfully converted from a traditional HTML/CSS/JavaScript project into a modern React + TypeScript application. The project follows industry-level practices including:

Separate frontend repository management

Automated CI pipeline using GitHub Actions

Code quality analysis through SonarCloud

Successful deployment on Vercel with continuous delivery

Responsive UI with real-time backend API integration

This ensures clean code, scalable development, and reliable deployment.

## Features

- **Create Ideas**: Add new ideas with title, description, category, and status
- **Organize**: Categorize ideas (General, Feature, Bug Fix, Improvement)
- **Track Status**: Monitor idea progress (New, In Progress, Completed, Archived)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Updates**: Connected to backend API for persistent data storage

## Tech Stack

- **React 18**: Modern UI library with hooks
- **TypeScript**: Type-safe development
- **Vite**: Next-generation frontend tooling
- **CSS3**: Responsive styling with gradients and animations
- **Fetch API**: Built-in HTTP client for API communication

## Getting Started

### Prerequisites

- Node.js 16+ installed
- Backend API running on `http://localhost:8000`

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Building for Production

Build the optimized production bundle:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── main.tsx          # React entry point
├── App.tsx           # Main app component
├── App.css           # App styling
└── index.css         # Global styles

index.html            # HTML template
vite.config.ts        # Vite configuration
tsconfig.json         # TypeScript configuration
```

## API Integration

The app connects to a backend API with the following endpoints:

- `GET /api/ideas` - Fetch all ideas
- `POST /api/ideas` - Create a new idea
- `DELETE /api/ideas/:id` - Delete an idea

The API proxy is configured in `vite.config.ts` to forward requests from `/api` to the backend server.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Features Implemented

- Fetch and display ideas from backend
- Create new ideas with form validation
- Delete ideas with confirmation
- Real-time error handling
- Loading states
- Responsive grid layout
- Status and category badges
- Sticky sidebar form on desktop

## Styling

The app uses modern CSS with:
- CSS Grid for layouts
- Flexbox for components
- Gradient backgrounds
- Smooth transitions and animations
- Mobile-first responsive design
- Dark/light mode support

## Notes

- The backend API server should be running and accessible at `http://localhost:8000`
- All API requests are proxied through Vite for development
- The app maintains the same functionality as the original HTML version
- State management is handled through React hooks (useState, useEffect)
