export default function Contact({ links }) {
  return (
    <section id="contact">
      <p className="section-label">// contact</p>
      <p className="contact-desc">
        I'm not actively looking, but I'm always happy to talk — about projects,
        ideas, or just interesting things. No forms, no friction.
      </p>
      <div className="contact-options">
        <a
          className="btn btn-primary"
          href={`mailto:${links.email}`}
        >
          Send an email ↗
        </a>
        <a
          className="btn btn-outline"
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
        {links.twitter && (
          <a
            className="btn btn-outline"
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter ↗
          </a>
        )}
      </div>
    </section>
  );
}
