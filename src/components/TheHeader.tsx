import Navigation from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const TheHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <Navigation navLinks={navItems} />
        </ul>
      </nav>
    </header>
  );
};

export { TheHeader };
