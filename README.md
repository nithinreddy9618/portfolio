# Portfolio Website

A modern, responsive portfolio website built with React and CSS.

## Adding Your Photo

To add your photo to the hero section:

1. **Place your photo** in the `src/assets/` directory
   - Recommended size: 500x500 pixels or larger
   - Supported formats: JPG, PNG, WebP
   - Name it something like `profile-photo.jpg`

2. **Import and use your photo** in `src/App.jsx`:
   ```jsx
   import profilePhoto from './assets/profile-photo.jpg'
   
   // Then replace the photo-placeholder div with:
   <img src={profilePhoto} alt="Your Name" />
   ```

3. **Update the hero section** in `src/App.jsx`:
   ```jsx
   <div className="hero-photo">
     <img src={profilePhoto} alt="Your Name" />
   </div>
   ```

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- ⚡ Fast loading with Vite
- 🎯 Smooth scrolling navigation
- 📊 Skills visualization
- 💼 Project showcase
- 📧 Contact form
- ♿ Accessibility friendly

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and visit `http://localhost:5173`

## Customization

- Replace "B.Nithin" with your actual name
- Update contact information
- Add your real projects
- Customize colors in the CSS file
- Add your photo to the hero section

## Technologies Used

- React 19
- Vite
- CSS3
- Modern JavaScript

Happy coding! 🚀
