# ALX Listing App

A simplified Airbnb clone focusing on the property listing page. This project is built with Next.js, TypeScript, and Tailwind CSS for clean, responsive UI and code maintainability.

## 🔧 Project Structure

- **components/**: Reusable UI components.
  - `common/`: Shared components like Card and Button.
- **interfaces/**: Contains TypeScript interfaces for consistent props typing.
- **constants/**: Holds app-wide constants like API URLs and UI strings.
- **public/assets/**: Contains static assets like images and SVGs.

## 📁 Project Structure Overview

```bash
.
├── components/
│   └── common/
│       ├── Button.tsx         # Reusable button component
│       └── Card.tsx           # Reusable listing card component
├── constants/
│   └── index.ts               # Static data (e.g., categories, filters)
├── interfaces/
│   └── index.ts               # TypeScript interfaces (types for props/data)
├── pages/
│   ├── _app.tsx               # App-level configuration
│   ├── _document.tsx          # Custom HTML structure
│   └── index.tsx              # Home page
├── public/
│   └── assets/                # Images/icons exported from Figma
├── styles/
│   └── globals.css            # Global styles using Tailwind
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript compiler configuration
└── next.config.ts             # Next.js configuration

## 🚀 Running the Project Locally

1. Install dependencies:

```bash
npm install
npm run dev 