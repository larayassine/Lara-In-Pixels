import projects from "../../Data/Projects.json";
import styles from "../Projects/Projects.module.css";
import { getImageUrl } from "../../utils";
export const Projects = () => {
return (
  <setion id="projects" className={styles.container}>
    <h2 className={styles.title}>Projects</h2>

    <div className={styles.cards}>
      {projects.map((project, id) => {
        return (
          <div key={id} className={styles.card}>
            <img
              src={getImageUrl(project.imageSrc)}
              alt={`image of ${project.title}`}
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDescription}>{project.description}</p>
            <ul className={styles.cardSkills}>
              {project.skills.map((skill, id) => {
                return (
                  <li key={id} className={styles.cardSkill}>
                    {skill}
                  </li>
                );
              })}
            </ul>

            <div className={styles.btns}>
              <a href={project["demo "]} className={styles.cardBtn}>
                {" "}
                Demo{" "}
              </a>
              <a href={project["source"]} className={styles.cardBtn}>
                {" "}
                Source{" "}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  </setion>
);
}