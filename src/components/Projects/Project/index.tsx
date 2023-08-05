import image from 'assets/images/thumbnail-project-1-large.webp';
import styles from './index.module.scss';

type ProjectProps = {
  name: string;
  liveUrl: string;
  codeUrl: string;
};

const Project = ({ name, codeUrl, liveUrl }: ProjectProps) => {
  return (
    <article>
      <div className={styles.project}>
        <div className={styles.project__image}>
          <img src={image} alt={name} />
        </div>
        <h3 className={styles.project__name}>{name}</h3>
        <ul className={styles.project__tags}>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <div className={styles.project__links}>
          <a className="button" href={codeUrl} target="_blank" rel="noopener noreferrer">
            view code
          </a>
          <a className="button" href={liveUrl} target="_blank" rel="noopener noreferrer">
            view peoject
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
