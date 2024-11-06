import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="about-us">About</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/jobs">Experience</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
