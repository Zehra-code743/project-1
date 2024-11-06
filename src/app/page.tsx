import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container">
          {/* About Me Section */}
          <div className="about-content">
            <div className="profile-info">
              <img
                src="/profile picture.jpg" // Ensure this path is correct
                alt="Profile Picture"
                className="profile-image"
              />
              <p className="about-description">
                I'm a passionate web developer with a focus on creating dynamic, user-friendly applications.
                I specialize in front-end development, leveraging modern technologies such as React, JavaScript, and CSS to build responsive and accessible web applications.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills">
            <h3 className="section-title">Skills</h3>
            <ul className="skills-list">
              <li>JavaScript / ES6</li>
              <li>React & Redux</li>
              <li>HTML5 & CSS3</li>
              <li>Node.js & Express</li>
              <li>RESTful APIs</li>
              <li>Version Control with Git</li>
              <li>Responsive Web Design</li>
              <li>UI/UX Design (Figma, Adobe XD)</li>
            </ul>
          </div>

          {/* Career Overview Section */}
          <div className="career-overview">
            <h3 className="section-title">Career Overview</h3>
            <p>
              Over the years, I’ve had the opportunity to work with a variety of clients and teams, helping to build scalable and efficient web solutions. My journey as a web developer began with an internship at Company X, where I gained hands-on experience in front-end development. Since then, I have worked on several full-stack web projects and have expanded my expertise in modern web frameworks and tools.
            </p>
            <p>
              I have collaborated with cross-functional teams, managed projects, and helped optimize the user experience of both small and large-scale applications. I am always eager to learn new skills and improve my expertise as a developer.
            </p>
          </div>

          {/* Personal Interests Section */}
          <div className="personal-interests">
            <h3 className="section-title">Personal Interests</h3>
            <p>
              Outside of coding, I enjoy exploring photography, traveling to new places, and playing strategy games. I believe in a balanced life where creativity meets logic, and I often find inspiration from my hobbies that help me think outside the box when it comes to problem-solving in web development.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
