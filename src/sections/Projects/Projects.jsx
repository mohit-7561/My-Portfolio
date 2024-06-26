import styles from "./ProjectsStyles.module.css";
import weather from "../../assets/weather.png";
import socialMedia from "../../assets/socialMedia.png";
import todo from "../../assets/todo.png";
import myntra from "../../assets/myntra.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://github.com/mohit-7561/Web-Development-Projects/tree/main/Weather%20App"
          h3="Weather Application"
        />
        <ProjectCard
          src={socialMedia}
          link="https://github.com/mohit-7561/first-react-app/tree/main/Projects/7-social-media"
          h3="Dynamic Web Application"
        />
        <ProjectCard
          src={todo}
          link="https://github.com/mohit-7561/first-react-app/tree/main/Projects/6-todo-app-version-three"
          h3="Todo App"
        />
        <ProjectCard
          src={myntra}
          link="https://github.com/mohit-7561/JavaScript-Projects/tree/main/Myntra%20Clone"
          h3="Myntra Clone
"
        />
      </div>
    </section>
  );
}

export default Projects;
