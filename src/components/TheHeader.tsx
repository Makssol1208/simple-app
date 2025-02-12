import Link from "next/link";

const TheHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link href="/" className="link">
            Home
          </Link>
          <Link href="/blog" className="link">
            Blog
          </Link>
          <Link href="/about" className="link">
            About
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export { TheHeader };
