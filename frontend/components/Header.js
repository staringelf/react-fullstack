import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Logo</Link>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
      <p>The Header Component</p>
    </header>
  )
}