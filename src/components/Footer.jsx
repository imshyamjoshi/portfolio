export default function Footer({ name }) {
  return (
    <footer>
      {name} · built with React · {new Date().getFullYear()}
    </footer>
  );
}
