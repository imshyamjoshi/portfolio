export default function Hero({ profile }) {
  return (
    <section id="home" className="hero">
      {profile.available && (
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Open to opportunities
        </div>
      )}

      <h1>{profile.name}</h1>
      <p className="hero-tagline">{profile.tagline}</p>
      <p className="hero-bio">{profile.bio}</p>

      <div className="hero-skills">
        {profile.skills.map((skill) => (
          <span key={skill} className="skill-chip">{skill}</span>
        ))}
      </div>

      <div className="hero-cta">
        <a className="btn btn-primary" href={profile.links.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <a className="btn btn-outline" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
        <a className="btn btn-outline" href={`mailto:${profile.links.email}`}>
          Email me
        </a>
      </div>
    </section>
  );
}
