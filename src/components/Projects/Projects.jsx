import styles from "../Projects/Projects.module.css";
import projects from "../../Data/Projects.json";
import getImageUrl from "../../utils";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>My Projects</h2>
      <div>
        {projects.map((project, id) => (
          <div key={id} className={styles.projectContainer}>
            <div className={styles.ProjectImageContainer}>
              <img src={getImageUrl(project.imageSrc)} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.skills.map((skill, skillId) => (
                <li key={skillId}>{skill}</li>
              ))}
            </ul>
            <div>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
