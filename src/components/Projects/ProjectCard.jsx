import projects from "../../Data/Projects.json";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({project: {title,imageSrc,description,skills,demo,source}}) =>{
return (
  projects.map((project,id) => {

        <div key={id}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`image of ${title}`}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {skills.map((skill, id) => {
          <li key={id}>{skill}</li>;
        })}
      </ul>

      <div>
        <a href={demo}> Demo </a> <a href={source}> Source</a>
      </div>
    </div>
  })

  
);

}