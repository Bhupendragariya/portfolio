# CreativeHub

A modern website for a creative agency built with React and Tailwind CSS.

![CreativeHub Screenshot](https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80)

## Features

- Responsive design that works on all devices
- Modern UI with animations and transitions
- Interactive components like contact form and newsletter subscription
- Showcases services, projects, and team information

## Technologies Used

- React.js - Frontend library
- Vite - Build tool
- Tailwind CSS - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/creativehub.git
   ```

2. Install dependencies
   ```bash
   cd creativehub
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
creativehub/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Deployment

Build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, which can be deployed to any static hosting service.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Heroicons](https://heroicons.com/)
