import Links from 'components/Links';
import styles from './index.module.scss';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <strong>marcinaugun</strong>
        <Links />
      </header>
    </div>
  );
};

export default Header;
