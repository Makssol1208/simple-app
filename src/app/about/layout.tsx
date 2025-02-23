import Link from "next/link";

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>About Us</h1>
      <ul>
        <li>
          <Link className="link" href="/about/contacts">Contacts</Link>
        </li>
        <li>
          <Link className="link" href="/about/team">Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
