import styles from './index.module.scss';
import ContactButton from 'components/ContactButton';

const Projects = () => {
  return (
    <section>
      <div className={`container`}>
        <header className={styles.projects__header}>
          <h2>Projects</h2>
          <ContactButton />
        </header>
      </div>
    </section>
  );
};

export default Projects;
