import skills from "../../Data/Skills.json";
import { getImageUrl } from "../../utils";
import styles from "../Experience/Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill, id) => (
          <div className={styles.skillContainer} key={id}>
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p className={styles.skillTitle}>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

