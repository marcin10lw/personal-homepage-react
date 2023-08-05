import styles from './index.module.scss';
import { skillsData } from './skillsData';

const Skills = () => {
  return (
    <section>
      <div className={`container ${styles.skills}`}>
        <ul className={styles.skills__list}>
          {skillsData.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
