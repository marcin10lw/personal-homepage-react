import { useQuery } from '@tanstack/react-query';

import ContactButton from 'components/ContactButton';
import Project from './Project';
import { getProjects } from './getProjects';
import styles from './index.module.scss';
import { projectsMap } from './projectsMap';

const Projects = () => {
  const { data } = useQuery(['projects'], getProjects);
  const filteredProjects = data?.filter((project) => {
    return !!projectsMap.find((projectMap) => projectMap.keyName === project.name);
  });

  return (
    <section>
      <div className={`container`}>
        <header className={styles.projects__header}>
          <h2 className={`heading`}>Projects</h2>
          <ContactButton />
        </header>
        <ul className={styles.projects__list}>
          {filteredProjects?.map(({ id, name, html_url, owner }) => (
            <li key={id}>
              <Project
                name={name}
                codeUrl={html_url}
                liveUrl={`https://${owner.login}.github.io/${name}/`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
