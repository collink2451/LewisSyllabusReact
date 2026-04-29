# Syllabus Client

React/TypeScript frontend that displays course syllabus information for Lewis University computer science classes. Fetches class, section, and instructor data from the [syllabus-server](../syllabus-server) backend.

## Features

- Browse all available CSCI course sections
- View full syllabus details: course info, instructor info, section header, descriptions
- Protected routes (requires login)

## Tech Stack

- **Framework:** React (TypeScript)
- **State:** Redux
- **Routing:** React Router
- **UI:** React Bootstrap, styled-components
- **HTTP:** Axios

## Setup

### Requirements

- Node.js 18+
- A running [syllabus-server](../syllabus-server) instance

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

> The backend URL is configured via `REACT_APP_API_URL` — set it in a `.env` file if running the backend on a different host. Leave it empty to use relative URLs (same origin).

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |

## Deployment

Run `npm run build` and serve the `build/` directory with any static hosting provider or web server.
