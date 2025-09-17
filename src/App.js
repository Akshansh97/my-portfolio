import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./App.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <h1
        className="logo"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
      >
        Akshansh Dubey
      </h1>

      <nav className={`navbar-row ${isOpen ? "active" : ""}`}>
        {["about", "projects", "experience", "contact"].map((section, idx) => (
          <Link
            key={idx}
            to={section}
            smooth
            duration={500}
            offset={-70}
            className="nav-link"
            activeClass="active"
            onClick={() => setIsOpen(false)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </nav>

      <div className="hamburger" onClick={toggleNavbar}>
        <span className={isOpen ? "bar1" : ""}></span>
        <span className={isOpen ? "bar2" : ""}></span>
        <span className={isOpen ? "bar3" : ""}></span>
      </div>
    </header>
  );
};

const Home = () => (
  <section className="home" id="home">
    <div className="hero-container">
      <div className="hero-text">
        <h1>Akshansh Dubey</h1>
        <h2>Full-Stack Developer</h2>
        <p>
          I specialize in building scalable web applications using
          <span className="highlight">
            {" "}
            <br></br>MongoDB, ExpressJS, React, NodeJs, Java, Spring Boot, and Microservices
          </span>
          .
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-illustration">
        <img
          src="/developer_illustration.png"
          alt="Developer illustration"
        />
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="about" id="about">
    <div className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I’m <span className="highlight">Akshansh Dubey</span>, a passionate
          <strong> Full-Stack Developer</strong> with experience building
          scalable and modern applications using
          <span className="highlight">
            {" "}
            Java, Spring Boot, Microservices, React, and MySQL
          </span>
          .
        </p>
        <p>
          I enjoy turning complex problems into simple, elegant solutions. My
          goal is to create applications that are not only functional but also
          intuitive and visually appealing.
        </p>
      </div>
      <div className="skills-card">
        <h3>Skills</h3>
        <div className="skills-grid">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>Microservices</span>
          <span>React</span>
          <span>Angular</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MySQL</span>
          <span>MongoDB</span>
          <span>Git & GitHub</span>
          <span>REST APIs</span>
          <span>HTML & CSS</span>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => {
  const projects = [
    {
      name: "Flashcard Generator",
      description:
        "An interactive flashcard app built with Next.js and React featuring smooth 3D flip animations and responsive design.",
      tech: "Next.js, React, CSS Modules",
      link: "https://github.com/Akshansh97/Flashcard-App",
    },
    {
      name: "OfficeRoom",
      description:
        "Web-based office furniture management and e-commerce app with Node.js/Express, product browsing, user authentication, and checkout.",
      tech: "Node.js, Express, JavaScript, HTML, CSS",
      link: "https://github.com/Akshansh97/OfficeRoom",
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

const Experience = () => {
  const experiences = [
    {
      role: "Senior Associate – Backend Developer",
      company: "BNED LoudCloud",
      duration: "May 2023 – Aug 2024 | Mumbai, India",
      points: [
        "Migrated the backend of a store application from a monolithic to microservices architecture, improving scalability and performance.",
        "Developed and optimized backend systems with Spring Boot and SQL for scalability and maintainability.",
        "Built and maintained REST APIs using Java, Spring Boot, Microservices, and Hibernate.",
        "Resolved regression and production defects, improving application stability and reliability.",
      ],
    },
    {
      role: "Associate – Production Support Developer",
      company: "BNED LoudCloud",
      duration: "Apr 2022 – May 2023 | Mumbai, India",
      points: [
        "Diagnosed and resolved production issues promptly, minimizing downtime.",
        "Performed root cause analysis on recurring issues and implemented preventive measures.",
        "Collaborated with cross-functional teams to resolve issues and documented incidents/SOPs.",
      ],
    },
    {
      role: "MERN Stack Developer Trainee",
      company: "AlmaBetter",
      duration: "Jun 2024 – Present",
      points: [
        "Built full-stack applications using MongoDB, Express, React, and Node.js.",
        "Collaborated on team-based projects and hands-on learning.",
        "Strengthened Java + Spring Boot alongside MERN stack for end-to-end expertise.",
      ],
    },
  ];

  const technicalSkills = {
    Languages: ["Java", "JavaScript", "TypeScript", "SQL"],
    Frameworks: ["Spring Boot", "React", "Node.js", "Express", "Angular"],
    Databases: ["MySQL", "MongoDB"],
    Tools: ["Git", "GitHub", "REST APIs", "Postman", "Docker"],
  };

  return (
    <section className="experience" id="experience">
      <h2>Experience & Skills</h2>
      <div className="experience-container">
        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="tech-skills-container">
          {Object.entries(technicalSkills).map(([category, skills], idx) => (
            <div key={idx} className="tech-category">
              <h4>{category}</h4>
              <div className="skills-grid">
                {skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section className="contact" id="contact">
    <div className="contact-split">
      <div className="contact-info-panel">
        <h2>Get in Touch</h2>
        <p>
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=akshanshdubey.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
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
        <p>
          <FaGithub className="contact-icon" />
          <span className="contact-text">
            <a
              href="https://github.com/Akshansh97"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Akshansh97
            </a>
          </span>
        </p>
        <div className="contact-socials"></div>
        <div className="contact-illustration"></div>
      </div>
      <div className="contact-form-card glass-card">
        <h3>Send a Message</h3>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>© 2025 Akshansh Dubey | Full-Stack Developer</p>
      <div className="footer-socials">
        <a
          href="https://github.com/Akshansh97"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/akshanshdubey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:akshanshdubey.dev@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </div>
  </footer>
);

export default App;
