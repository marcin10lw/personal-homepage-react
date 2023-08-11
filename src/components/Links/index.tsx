import { motion, Variants } from 'framer-motion';

import styles from './index.module.scss';
import { SiFrontendmentor } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';
import { ImGithub } from 'react-icons/im';

const linksVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

const Links = () => {
  const onButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.links}>
      <button onClick={onButtonClick}>marcinaugun</button>

      <ul className={styles.linksList}>
        <motion.li variants={linksVariants}>
          <a
            href="https://github.com/marcin10lw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImGithub className={styles.linksList__icon} />
          </a>
        </motion.li>
        <motion.li variants={linksVariants}>
          <a
            href="https://www.frontendmentor.io/profile/marcin10lw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiFrontendmentor className={styles.linksList__icon} />
          </a>
        </motion.li>
        <motion.li variants={linksVariants}>
          <a
            href="https://www.linkedin.com/in/marcin-augun-951659266/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className={styles.linksList__icon} />
          </a>
        </motion.li>
      </ul>
    </div>
  );
};

export default Links;
