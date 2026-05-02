export default function Nav({ active, links }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "journey", label: "Journey" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#home" className="nav-logo">shawn.</a>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
