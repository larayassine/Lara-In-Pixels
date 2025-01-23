import styles from "../About/About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("About/about-img.png")}
          alt="me pic"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              className={styles.aboutItemIcon}
              src={getImageUrl("About/me-icon.png")}
              alt="icon"
            />
            <div className={styles.aboutItemText}>
              <h4>Frontend developer</h4>
              <p>
                Skilled in HTML, CSS, JavaScript, React, and Flutter, passionate
                about building dynamic, responsive, and user-friendly web and
                mobile applications.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img
              className={styles.aboutItemIcon}
              src={getImageUrl("About/angry.png")}
              alt="icon"
            />
            <div className={styles.aboutItemText}>
              <h4>UI/UX Designer</h4>
              <p>
                Proficient in Figma and Webflow, focused on creating intuitive
                and visually appealing digital experiences that prioritize user
                satisfaction.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img
              className={styles.aboutItemIcon}
              src={getImageUrl("About/bat.png")}
              alt="icon"
            />
            <div className={styles.aboutItemText}>
              <h4>Cybersecurity Enthusiast</h4>
              <p>
                I’m expanding my skills in cybersecurity and cloud technologies
                to better understand and address digital security challenges.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
