export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
      <p>
        Connect with me on{' '}
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a> or{' '}
        <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </footer>
  );
}
