import { getImageUrl } from "../../utils"
import styles from "../Contact/Contact.module.css"; 
export const Contact = () => {
return (
  <footer id="contact">
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}> contact </h2>
        <p>Feel free to reach out</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("Contact/icons8-email-50.png")}
            alt="email icon"
          ></img>
          <a href="mailto:laraiyassine@gmail.com">laraiyassine@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("Contact/icons8-github-48.png")}
            alt="github icon"
          ></img>
          <a href="https://github.com/larayassine">
            https://github.com/larayassine
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("Contact/icons8-linkedin-48.png")}
            alt="linkedin icon"
          ></img>
          <a href="https://www.linkedin.com/in/lara-yassine-922704218/">
            https://www.linkedin.com/in/lara-yassine-922704218/
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

}