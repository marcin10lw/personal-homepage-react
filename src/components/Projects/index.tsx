import { useQuery } from '@tanstack/react-query';

import ContactButton from 'components/ContactButton';
import Project from './Project';
import useProjects from './useProjects';
import { getProjects } from './getProjects';
import styles from './index.module.scss';

const Projects = () => {
  const { data } = useQuery(['projects'], getProjects);
  const sortedProjects = useProjects(data);

  return (
    <section>
      <div className={`container ${styles.projects}`}>
        <header className={styles.projects__header}>
          <h2 className={`heading`}>Projects</h2>
          <ContactButton />
        </header>
        <ul className={styles.projects__list}>
          {sortedProjects?.map(({ id, name, html_url, owner }) => (
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
