import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <section className="section">
        <div className="container">
          
          {/* About Me Content */}
          <div className="about-content">
            <img
              src="/nextjs.jpg"  // Ensure this is the correct path for the profile image
              alt="Profile Picture"
              className="profile-image"
            />
            <p>
              I'm a web developer with a passion for creating impactful applications. 
              I specialize in front-end development, focusing on building responsive and 
              user-friendly interfaces.
            </p>
          </div>

          {/* Experience Section */}
          <div className="experience-section">
            <h3 className="section-title">Professional Experience</h3>
            <div className="experience">
              <div className="job">
                <h4 className="job-title">Frontend Developer at Company X</h4>
                <p className="job-description">
                  Developed responsive and interactive user interfaces using React, HTML, CSS, and JavaScript.
                  Collaborated with designers and backend developers to create seamless web applications.
                </p>
              </div>
              <div className="job">
                <h4 className="job-title">Full-stack Developer at Company Y</h4>
                <p className="job-description">
                  Built and maintained full-stack applications using Node.js, Express, MongoDB, and React.
                  Responsible for designing RESTful APIs, handling databases, and ensuring efficient deployment and hosting.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
