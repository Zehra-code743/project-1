import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <section className="section">
        <div className="container">

          {/* About Me Section */}
          <div className="about-content">
            <img
              src="/nextjs.jpg" // Path to the image in the public directory
              alt="Profile Picture"
              className="profile-image"
            />
            <p>
              I'm a web developer with a passion for creating impactful applications. I specialize in front-end development, focusing on building responsive and user-friendly interfaces. I’m always striving to improve my skills and stay up to date with the latest web technologies.
            </p>
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <h3 className="section-title">Skills</h3>
            <ul className="skills-list">
              <li>HTML5, CSS3, SASS</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js & Redux</li>
              <li>Next.js</li>
              <li>Node.js & Express</li>
              <li>API Development (RESTful APIs, GraphQL)</li>
              <li>Git & GitHub</li>
              <li>Responsive Web Design</li>
              <li>UI/UX Design (Figma, Adobe XD)</li>
            </ul>
          </div>

          {/* Experience Section */}
          <div className="experience-section">
            <h3 className="section-title">Professional Experience</h3>
            <div className="experience">
              <div className="job">
                <h4>Frontend Developer at Company X</h4>
                <p>
                  Developed dynamic, responsive web applications using React.js, ensuring a seamless user experience across devices.
                </p>
              </div>
              <div className="job">
                <h4>Full-stack Developer at Company Y</h4>
                <p>
                  Built and maintained full-stack web applications using Node.js and React. Integrated REST APIs to handle complex data and improve user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="education-section">
            <h3 className="section-title">Education</h3>
            <p>
              Bachelor of Science in Computer Science from XYZ University.
            </p>
            <p>Graduated in 2021, where I focused on web development, algorithms, and software engineering principles.</p>
          </div>

          {/* Personal Interests Section */}
          <div className="personal-interests-section">
            <h3 className="section-title">Personal Interests</h3>
            <p>
              Outside of work, I love traveling and exploring new cultures, as well as photography. I also enjoy coding side projects, learning new frameworks, and contributing to open-source projects.
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
