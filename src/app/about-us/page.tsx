import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          {/* Profile Image */}
          <img
            src="/web developer.jpg"  // Ensure this path is correct
            alt="Profile Picture"
            className="profile-image"
          />
          
          <p className="about-description">
            I am a full-stack developer with a passion for creating web applications. I specialize in both frontend and backend technologies, focusing on building scalable, maintainable, and user-friendly web solutions.
          </p>
        </div>

        {/* Skills Section */}
        <section className="skills-section">
          <h3 className="section-title">Skills</h3>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React & Redux</li>
            <li>Node.js & Express</li>
            <li>HTML5, CSS3, SASS</li>
            <li>Database Management (MongoDB, PostgreSQL)</li>
            <li>Version Control (Git & GitHub)</li>
            <li>API Development & Integration (REST, GraphQL)</li>
            <li>Responsive Web Design</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section className="experience-section">
          <h3 className="section-title">Professional Experience</h3>
          <div className="experience">
            <div className="job">
              <h4>Frontend Developer at Company X</h4>
              <p>Developed dynamic, responsive websites and web applications using React.js, HTML, CSS, and JavaScript.</p>
            </div>
            <div className="job">
              <h4>Web Developer at Company Y</h4>
              <p>Worked on creating custom web solutions for clients using Node.js, Express, and various frontend technologies.</p>
            </div>
          </div>
        </section>

        {/* Personal Interests Section */}
        <section className="personal-interests-section">
          <h3 className="section-title">Personal Interests</h3>
          <p>
            In my free time, I enjoy hiking, photography, and exploring new technologies. I'm always looking for ways to improve my skills and stay updated with the latest trends in web development. I also love playing strategy games, which helps me to think critically and approach problems in creative ways.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
