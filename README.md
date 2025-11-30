# Assemblies Of God (UPPER ROOM) Website

A modern, responsive church website built with React, Vite, and TailwindCSS.

## Features

- **Modern Design**: Soft teal/navy/gold palette with 3D and parallax effects.
- **Responsive**: Fully responsive layout for all devices.
- **Pages**:
  - Home (Hero, Welcome, CTA)
  - About (History, Mission, Values)
  - Services (Times, Ministries)
  - Sermons (Archive grid)
  - Events (Upcoming events list)
  - Gallery (Photo grid with lightbox)
  - Contact (Form and info)

## Tech Stack

- React
- Vite
- TailwindCSS
- Framer Motion (Animations)
- Lucide React (Icons)
- React Router DOM (Routing)

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Deployment

This project is configured for deployment on Netlify.

1.  Push the code to a GitHub repository.
2.  Connect the repository to Netlify.
3.  Netlify will automatically detect the `netlify.toml` and configure the build settings.
    - Build Command: `npm run build`
    - Publish Directory: `dist`

## Customization

- **Colors**: Edit `tailwind.config.js` to change the `primary`, `secondary`, and `accent` colors.
- **Content**: Update the component files in `src/pages` to change the text and images.
- **Images**: Replace the placeholder URLs with actual church photos.
