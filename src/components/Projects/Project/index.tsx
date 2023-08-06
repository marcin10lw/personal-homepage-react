import { useState } from 'react';

import image from 'assets/images/thumbnail-project-1-large.webp';
import styles from './index.module.scss';
import { projectsMap } from '../projectsMap';

type ProjectProps = {
  name: string;
  liveUrl: string;
  codeUrl: string;
};

const Project = ({ name, codeUrl, liveUrl }: ProjectProps) => {
  const [isLinkFocused, setIsLinkFocused] = useState(false);
  const tags = projectsMap.find((project) => project.keyName === name)?.tags;
  const projectName = projectsMap.find((project) => project.keyName === name)?.name;

  const onLinkFocus = () => {
    setIsLinkFocused(true);
  };

  const onLinkBlur = () => {
    setIsLinkFocused(false);
  };

  return (
    <article className={styles.projectWrapper}>
      <div className={styles.project}>
        <div
          className={`${styles.project__image} ${
            isLinkFocused ? styles['project__image--focused'] : ''
          }`}
        >
          <img src={image} alt={name} />
        </div>
        <div className={styles.flex}>
          <div>
            <h3 className={styles.project__name}>{projectName}</h3>
            <ul className={styles.project__tags}>{tags?.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          </div>
          <div
            className={`${styles.project__links} ${
              isLinkFocused ? styles['project__links--focused'] : ''
            }`}
          >
            <a
              className="button"
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onFocus={onLinkFocus}
              onBlur={onLinkBlur}
            >
              view peoject
            </a>
            <a
              className="button"
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onFocus={onLinkFocus}
              onBlur={onLinkBlur}
            >
              view code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
