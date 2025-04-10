# Let's Ride - Frontend

This repository contains the React frontend application for the **Let's Ride** ride-scheduling service. It provides the user interface for riders and drivers to manage pre-planned, scheduled trips.

Built with [React](https://reactjs.org/) and initialized using [Vite](https://vitejs.dev/).

## Current Focus (Phase 1: Scheduled Rides)

The initial version focuses exclusively on **scheduled rides** with **fixed pricing** to ensure reliability and planning capabilities for early users. Key features include:

* **User Authentication:** Secure registration and login (JWT-based).
* **Trip Posting:** Allows users to post scheduled ride needs or offers, specifying origin, destination, date/time, and a **fixed price**.
* **Trip Discovery:** Browse and search functionality for available scheduled trip postings.
* **Booking Workflow:** Enables riders to book driver offers and drivers to make offers on rider needs, including confirmation steps.
* **Dashboard:** A section for users to view their upcoming and past scheduled trips.
* **Push Notifications:** Integration for subscribing to and receiving notifications about trip status updates (requests, confirmations, reminders).

This frontend consumes a REST API provided by the separate [Let's Ride Backend](link-to-your-backend-repo-if-public) service (built with Java/Spring Boot) for all business logic and data persistence.

## Technology Stack

* **Framework:** React
* **Build Tool:** Vite
* **Routing:** React Router (`react-router-dom`)
* **API Communication:** Axios / Fetch API
* **Styling:** [*Update Later: e.g., CSS Modules, Tailwind CSS, Material UI, etc.*]
* **State Management:** [*Update Later: e.g., Context API, Zustand, Redux Toolkit, etc.*]

## Getting Started

These instructions will get you a copy of the project up and running on your local machine or within GitHub Codespaces for development.

### Prerequisites

* Node.js (v18 or higher recommended)
* npm (v9 or higher recommended) or yarn

### Installation & Setup

1.  **Clone the repository (if working locally):**
    ```bash
    git clone [https://github.com/pendli-sheshank/lets-ride-frontend.git](https://github.com/pendli-sheshank/lets-ride-frontend.git)
    cd lets-ride-frontend
    ```
    *(If using Codespaces, this is already done for you)*

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(Or `yarn install`)*

3.  **(Optional but Recommended) Environment Variables:**
    Create a `.env` file in the project root (this file should be listed in `.gitignore`). You'll likely need to define the base URL for your backend API, especially for local development or connecting to a deployed backend staging environment.
    ```env
    # Example for local backend running on port 8080
    VITE_API_BASE_URL=http://localhost:8080/api

    # Example for connecting to your deployed Render backend
    # VITE_API_BASE_URL=[https://your-render-backend-url.onrender.com/api](https://your-render-backend-url.onrender.com/api)
    ```
    Your API client code (e.g., Axios instance) should use `import.meta.env.VITE_API_BASE_URL`.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode using Vite's fast development server.
Open the URL provided (usually `http://localhost:5173` or a forwarded port in Codespaces) to view it in your browser. The page benefits from Hot Module Replacement (HMR) for fast updates.

### `npm run build`

Builds the static assets for production into the `dist` folder. It bundles your code and optimizes it for performance.

### `npm run preview`

Starts a simple local server to preview your production build from the `dist` folder. Useful for checking the build output before deployment.

## Deployment

This application is deployed as a static site to **GitHub Pages**. Deployment is automated via a **GitHub Actions** workflow defined in `.github/workflows/deploy-frontend.yml` (you will create this file as part of the setup). The workflow typically triggers on pushes to the `main` branch, executes `npm run build`, and then deploys the contents of the `/dist` directory to the `gh-pages` branch, which is served by GitHub Pages.

---
