import { getImageUrl } from "../../utils";
import styles from "../Hero/Hero.module.css";

export const Hero = () => {
return (
  <section className={styles.container}>
    <div className={styles.leftSection}>
      <h1 className={styles.title}>Hi , I am Lara!</h1>
      <p className={styles.description}>
        Welcome to my portfolio! With 2 years of experience in front-end
        development and UI/UX design, I create intuitive interfaces and bring
        ideas to life with clean, efficient code.
      </p>
      <a href="mailto:laraiyassine@gmail.com" className={styles.contactBtn}>
        Contact Me
      </a>
    </div>

    <img src={getImageUrl("Hero/me.png")} className={styles.heroImage} />
    <div className={styles.Blur1}></div>
    <div className={styles.Blur2}></div>
  </section>
);
};