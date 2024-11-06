import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Jobs() {
  return (
    <div>
      <Header />
      <section className="section">
        <div className="container">
          
          <div className="card">
            <h3>Frontend Developer | Company X</h3>
            <p>Worked on building responsive and user-friendly web applications with React and Redux.</p>
          </div>
          <div className="card">
            <h3>Web Developer | Company Y</h3>
            <p>Developed and maintained websites and landing pages using HTML, CSS, and JavaScript.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
