import { useState } from "react";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-top">
        <span className="project-name">{project.name}</span>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">Live ↗</a>
          )}
        </div>
      </div>
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects({ workProjects, personalProjects }) {
  const [showAllWork, setShowAllWork] = useState(false);
  const [showAllPersonal, setShowAllPersonal] = useState(false);

  const visibleWork = showAllWork ? workProjects : workProjects.slice(0, 2);
  const visiblePersonal = showAllPersonal ? personalProjects : personalProjects.slice(0, 2);

  return (
    <section id="projects">
      <p className="section-label">// projects</p>

      <div className="projects-sub-label">Personal</div>
      <div className="projects-grid">
        {visiblePersonal.map((p) => <ProjectCard key={p.name} project={p} />)}
      </div>
      {personalProjects.length > 2 && (
        <button
          className="btn btn-outline"
          style={{ marginTop: "14px" }}
          onClick={() => setShowAllPersonal(!showAllPersonal)}
        >
          {showAllPersonal ? "Show less" : `+${personalProjects.length - 2} more`}
        </button>
      )}

      <div className="projects-sub-label" style={{ marginTop: "40px" }}>Work</div>
      <div className="projects-grid">
        {visibleWork.map((p) => <ProjectCard key={p.name} project={p} />)}
      </div>
      {workProjects.length > 2 && (
        <button
          className="btn btn-outline"
          style={{ marginTop: "14px" }}
          onClick={() => setShowAllWork(!showAllWork)}
        >
          {showAllWork ? "Show less" : `+${workProjects.length - 2} more`}
        </button>
      )}
    </section>
  );
}
