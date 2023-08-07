import { useQuery } from '@tanstack/react-query';

import ContactButton from 'components/ContactButton';
import Project from './Project';
import useProjects from './useProjects';
import { getProjects } from './getProjects';
import styles from './index.module.scss';
import ProjectPlaceholder from './ProjectPlaceholder';
import { findProject } from './findProject';

const Projects = () => {
  const { data, status } = useQuery(['projects'], getProjects);
  const sortedProjects = useProjects(data);

  const placeholderArray = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <section>
      <div className={`container ${styles.projects}`}>
        <header className={styles.projects__header}>
          <h2 className={`heading`}>Projects</h2>
          <ContactButton />
        </header>
        <ul className={styles.projects__list}>
          {status === 'success' && (
            <>
              <li>
                <Project
                  name="TerraEye"
                  liveUrl="https://terraeye.co/"
                  tags={['REACT', 'TYPESCRIPT', 'STYLED-COMPONENTS']}
                  hasSingleLink
                />
              </li>
              {sortedProjects?.map(({ id, name, html_url, owner }) => (
                <li key={id}>
                  <Project
                    name={findProject(name)?.name}
                    codeUrl={html_url}
                    liveUrl={`https://${owner.login}.github.io/${name}/`}
                    tags={findProject(name)?.tags}
                  />
                </li>
              ))}
            </>
          )}
          {status === 'loading' &&
            placeholderArray.map((element) => (
              <li key={element}>
                <ProjectPlaceholder />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
