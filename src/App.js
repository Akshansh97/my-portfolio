import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './App.css';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

const Header = () => (
  <header className="header">
    <h1
      style={{ cursor: 'pointer' }}
      onClick={() => scroll.scrollToTop({ duration: 500 })}
    >
      Akshansh Dubey
    </h1>
    <nav>
      <Link to="about" smooth duration={500} offset={-70}>
        About
      </Link>
      <Link to="projects" smooth duration={500} offset={-70}>
        Projects
      </Link>
      <Link to="blog" smooth duration={500} offset={-70}>
        Blog
      </Link>
      <Link to="contact" smooth duration={500} offset={-70}>
        Contact
      </Link>
    </nav>
  </header>
);

const Home = () => (
  <section className="home" id="home">
    <div className="hero-glass">
      <h1>Akshansh Dubey</h1>
      <h2>Full Stack Developer</h2>
      <p>
        Building modern, scalable web applications with React, Node.js, and best practices.
      </p>
    </div>
  </section>
);

const About = () => (
  <section className="about" id="about">
    <div className="glass-card">
      <h2>About Me</h2>
      <p>
        Hi, I'm Akshansh Dubey, a Full Stack Developer with skills in Web
        Development, React, Angular, Java, Spring Boot, Microservices, and MySQL.
      </p>
      <p>I love building scalable and performant web apps.</p>
    </div>
  </section>
);

const Projects = () => {
  const projects = [
    {
      name: 'Flashcard Generator',
      description:
        'An interactive flashcard app built with Next.js and React featuring smooth 3D flip animations and responsive design.',
      tech: 'Next.js, React, CSS Modules',
      link: 'https://github.com/Akshansh97/Flashcard-App',
    },
    {
      name: 'OfficeRoom',
      description:
        'Web-based office furniture management and e-commerce app with Node.js/Express, product browsing, user authentication, and checkout.',
      tech: 'Node.js, Express, JavaScript, HTML, CSS',
      link: 'https://github.com/Akshansh97/OfficeRoom',
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((p, idx) => (
          <div key={idx} className="project-showcase">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p>
              <strong>Technologies:</strong> {p.tech}
            </p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
      <p className="project-soon">More projects coming soon...</p>
    </section>
  );
};

const Blog = () => (
  <section className="blog" id="blog">
    <div className="glass-card">
      <h2>Blog</h2>
      <p>Stay tuned for upcoming technical articles and updates!</p>
    </div>
  </section>
);

const Contact = () => (
  <section className="contact" id="contact">
    <div className="contact-split">
      <div className="contact-info-panel">
        <h2>Get in Touch</h2>
        <p>
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">
            <a href="mailto:akshanshdubey.dev@gmail.com">
              akshanshdubey.dev@gmail.com
            </a>
          </span>
        </p>
        <p>
          <FaLinkedin className="contact-icon" />
          <span className="contact-text">
            <a
              href="https://www.linkedin.com/in/akshanshdubey"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/akshanshdubey
            </a>
          </span>
        </p>
        <div className="contact-socials">
          {/* Optionally add more socials or icons */}
        </div>
        <div className="contact-illustration"></div>
      </div>
      <div className="contact-form-card glass-card">
        <h3>Send a Message</h3>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2025 Akshansh Dubey</p>
  </footer>
);

export default App;
