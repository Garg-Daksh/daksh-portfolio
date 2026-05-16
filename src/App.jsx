import "./index.css";

export default function DakshPortfolio() {
  const projects = [
    {
      title: "Jarvis Voice Assistant",
      description:
        "A Python-based virtual voice assistant with speech recognition, text-to-speech, Wikipedia search, music playback, screenshots, and system commands.",
      tech: ["Python", "Speech Recognition", "Automation"],
    },
    {
      title: "Car Rental Pro",
      description:
        "A car rental management platform focused on smooth booking, vehicle management, and user-friendly workflows.",
      tech: ["Java", "Database", "Web Development"],
    },
    {
      title: "CodeMasters",
      description:
        "An online judge and coding practice platform inspired by LeetCode with coding challenges, submissions, and evaluation features.",
      tech: ["Full Stack", "DSA", "Problem Solving"],
    },
  ];

  const skills = [
    "C",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "JDBC",
    "Operating Systems",
    "Database Management",
    "Problem Solving",
  ];

  return (
    <div className="container">
      <nav className="navbar">
        <h1>Daksh Garg</h1>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p className="subtitle">B.Tech CSE Core Student</p>
          <h2>Building practical and modern software solutions.</h2>
          <p className="description">
            I’m Daksh Garg, a 3rd year Computer Science Engineering student at
            SRM University with interests in full-stack development, software systems,
            and intelligent applications.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary-btn">View Projects</a>
            <a href="#contact" className="secondary-btn">Contact Me</a>
          </div>
        </div>

        <div className="photo-card">
  <img
    src="/profile.png"
    alt="Daksh Garg"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "24px"
    }}
  />
</div>
      </section>

      <section id="about" className="section">
        <h3>About Me</h3>

        <div className="about-grid">
          <div>
            <p>
              I am currently pursuing B.Tech in Computer Science Engineering
              (Core) at SRM University.
            </p>

            <p>
              My areas of interest include full-stack development,
              operating systems, databases, and AI-powered applications.
            </p>

            <p>
              I actively work on academic and personal projects to strengthen
              my development and problem-solving skills.
            </p>
          </div>

          <div className="stats-grid">
            <div className="card">
              <span>Current CGPA</span>
              <h4>7.23</h4>
            </div>

            <div className="card">
              <span>Current SGPA</span>
              <h4>8.13</h4>
            </div>

            <div className="card">
              <span>12th Percentage</span>
              <h4>77%</h4>
            </div>

            <div className="card">
              <span>10th Percentage</span>
              <h4>88%</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h3>Projects</h3>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <span className="project-number">Project {index + 1}</span>
              <h4>{project.title}</h4>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h3>Skills</h3>

        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>{skill}</div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h3>Let’s build something impactful.</h3>
        <p>Open to internships, collaborations, and development opportunities.</p>
<div className="contact-info">
  <p>Phone: +91 9213206445</p>
  <p>Email: gargd7758@gmail.com</p>

  <p>
    LinkedIn:
    <a
      href="https://www.linkedin.com/in/daksh-garg-74a17a385"
      target="_blank"
      rel="noreferrer"
    >
      daksh-garg
    </a>
  </p>

  <p>
    GitHub:
    <a
      href="https://github.com/Garg-Daksh"
      target="_blank"
      rel="noreferrer"
    >
      Garg-Daksh
    </a>
  </p>
</div>
        
      </section>
    </div>
  );
}
