export default function Journey({ journey }) {
  return (
    <section id="journey">
      <p className="section-label">// journey</p>
      <div className="timeline">
        {journey.map((item) => (
          <div key={item.year} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
