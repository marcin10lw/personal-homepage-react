import { projects } from './projects';
import ContactButton from 'components/ContactButton';
import Project from './Project';
import styles from './index.module.scss';

const Projects = () => {
  const sortedProjects = projects.sort((a, b) => a.id - b.id);

  return (
    <section>
      <div className={`container ${styles.projects}`}>
        <header className={styles.projects__header}>
          <h2 className={`heading`}>Projects</h2>
          <ContactButton />
        </header>
        <ul className={styles.projects__list}>
          {sortedProjects.map((project) => (
            <li key={project.id}>
              <Project project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
