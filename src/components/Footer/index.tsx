import Links from 'components/Links';
import styles from './index.module.scss';
import Form from './Form';

const Footer = () => {
  return (
    <div className={styles.footerWrapper} id="footer">
      <footer className={`container`}>
        <div className={styles.footer__mainContent}>
          <article className={styles.footer__article}>
            <h2 className="heading">Contact</h2>
            <p>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </article>

          <Form />
        </div>

        <div className={styles.footer__links}>
          <Links />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
