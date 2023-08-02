import styles from './index.module.scss';
import { ReactComponent as GithubIcon } from 'assets/images/icon-github.svg';
import { ReactComponent as FrontendMentorIcon } from 'assets/images/icon-frontend-mentor.svg';
import { ReactComponent as LinkedinIcon } from 'assets/images/icon-linkedin.svg';

const Links = () => {
  return (
    <ul className={styles.linksList}>
      <li>
        <a href="https://github.com/marcin10lw" target="_blank" rel="noopener noreferrer">
          <GithubIcon className={styles.linksList__icon} />
        </a>
      </li>
      <li>
        <a href="https://www.frontendmentor.io/profile/marcin10lw" target="_blank" rel="noopener noreferrer">
          <FrontendMentorIcon className={styles.linksList__icon} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/marcin-augun-951659266/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon className={styles.linksList__icon} />
        </a>
      </li>
    </ul>
  );
};

export default Links;
