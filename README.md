# Lewis Syllabus

React/TypeScript frontend that displays course syllabus information for Lewis University computer science classes. Fetches class, section, and instructor data from the [Lewis-Syllabus-Server](../Lewis-Syllabus-Server) backend.

## Features

- Browse all available CSCI course sections
- View full syllabus details: course info, instructor info, section header, descriptions
- Protected routes (requires login)
- Hosted on Azure Static Web Apps

## Tech Stack

- **Framework:** React (TypeScript)
- **State:** Redux
- **Routing:** React Router
- **UI:** React Bootstrap, styled-components
- **HTTP:** Axios
- **Deployment:** Azure Static Web Apps

## Setup

### Requirements

- Node.js 18+
- A running [Lewis-Syllabus-Server](../Lewis-Syllabus-Server) instance

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

> The API base URL is configured in the source — update it to point to your local Lewis-Syllabus-Server if needed.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |

## Deployment

Deploy to **Azure Static Web Apps** using the included `staticwebapp.config.json`.
