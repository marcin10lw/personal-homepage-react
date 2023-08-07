import { useState } from 'react';

import styles from './index.module.scss';
import image from 'assets/images/thumbnail-project-1-large.webp';

type ProjectProps = {
  name: string | undefined;
  liveUrl: string;
  codeUrl?: string;
  tags: string[] | undefined;
  hasSingleLink?: boolean;
};

const Project = ({
  name,
  codeUrl,
  liveUrl,
  tags,
  hasSingleLink,
}: ProjectProps) => {
  const [isLinkFocused, setIsLinkFocused] = useState(false);

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
            <h3 className={styles.project__name}>{name}</h3>
            <ul className={styles.project__tags}>
              {tags?.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>
          <div
            className={`${styles.project__links} ${
              isLinkFocused ? styles['project__links--focused'] : ''
            } ${hasSingleLink ? styles['project__links--singleLink'] : ''}`}
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
            {codeUrl && (
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
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
