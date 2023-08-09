import { useState } from 'react';

import styles from './index.module.scss';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import ProjectLinks from './ProjectLinks';

type ProjectProps = {
  name: string | undefined;
  description: string;
  liveUrl: string;
  codeUrl?: string;
  tags: string[] | undefined;
  image: string;
};

const Project = ({
  name,
  codeUrl,
  liveUrl,
  tags,
  description,
  image,
}: ProjectProps) => {
  const [showLinks, setShowLinks] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const onLinkFocus = () => {
    setShowLinks(true);
  };

  const onLinkBlur = () => {
    setShowLinks(false);
  };

  const projectLinks = (
    <ProjectLinks
      liveUrl={liveUrl}
      codeUrl={codeUrl}
      onLinkBlur={onLinkBlur}
      onLinkFocus={onLinkFocus}
    />
  );

  return (
    <article className={styles.projectWrapper}>
      <div className={styles.project}>
        <div
          onMouseEnter={() => !showDescription && setShowLinks(true)}
          onMouseLeave={() => setShowLinks(false)}
          className={`${styles.project__image} ${
            showLinks ? styles['project__image--focused'] : ''
          }`}
        >
          <div
            className={`${styles.project__description} ${
              showDescription ? styles['project__description--show'] : ''
            }`}
          >
            <p>{description}</p>
          </div>
          <img src={image} alt={name} />
          <div className={styles['project__links--desktop']}>
            {projectLinks}
          </div>
        </div>
        <div className={styles.project__flex}>
          <div>
            <div className={styles.wrapper}>
              <h3 className={styles.project__name}>{name}</h3>
              <button
                onClick={() =>
                  setShowDescription((showDescription) => !showDescription)
                }
                className={`${styles.project__showDescription} ${
                  showDescription
                    ? styles['project__showDescription--active']
                    : ''
                }`}
              >
                <AiOutlineQuestionCircle />
              </button>
            </div>
            <ul className={styles.project__tags}>
              {tags?.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </div>

          <div className={styles['project__links--mobile']}>{projectLinks}</div>
        </div>
      </div>
    </article>
  );
};

export default Project;
