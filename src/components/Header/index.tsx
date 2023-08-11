import { motion, Variants } from 'framer-motion';

import Links from 'components/Links';
import styles from './index.module.scss';

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const Header = () => {
  return (
    <motion.div
      className={styles.headerWrapper}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <header className={styles.header}>
        <Links />
      </header>
    </motion.div>
  );
};

export default Header;
