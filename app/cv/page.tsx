import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          {/* Replace the href with your Google Drive CV link */}
          <Link href="https://drive.google.com/file/d/1ZeEP0oP7Fm_ZcE4wYwf8H4AX8fIxlBlv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            CV
          </Link>
        </li>
        {/* Other navigation links */}
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
