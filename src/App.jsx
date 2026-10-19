import Navbar from './components/Navbar'
import Projects from './components/Projects'
import './App.css'

// The parent owns the data; children receive it as props
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'fullstack',
    label: 'Full-Stack',
    description:
      'A modern e-commerce platform built with React and Node.js, featuring shopping cart, payment integration, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    category: 'frontend',
    label: 'Frontend',
    description:
      'Clean and intuitive weather dashboard with location search, 7-day forecast, and beautiful animations.',
    tags: ['JavaScript', 'CSS3', 'API'],
  },
  {
    id: 3,
    title: 'Task Management App',
    category: 'webapp',
    label: 'Web App',
    description:
      'Productivity app with drag-and-drop functionality, project collaboration, and deadline tracking.',
    tags: ['React', 'TypeScript', 'Firebase'],
  },
  {
    id: 4,
    title: 'Creative Portfolio',
    category: 'design',
    label: 'Design',
    description:
      'Responsive portfolio website for a graphic designer with interactive galleries and smooth animations.',
    tags: ['HTML5', 'CSS3', 'GSAP'],
  },
]

function App() {
  return (
    <div className="portfolio">
      <Navbar />
      <Projects projects={projects} />
    </div>
  )
}

export default App
