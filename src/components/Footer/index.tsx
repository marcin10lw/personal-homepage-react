import Links from 'components/Links';
import styles from './index.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
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

          <form>
            <fieldset className={styles.form__fieldset}>
              <div className={styles.input}>
                <label htmlFor="name">name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="NAME"
                  required
                />
                <span className={styles.input__error} />
                <div className={styles.input__errorIcon} />
              </div>
              <div className={styles.input}>
                <label htmlFor="email">email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  required
                />
                <span className={styles.input__error} />
                <div className={styles.input__errorIcon} />
              </div>
              <div className={styles.input}>
                <label htmlFor="message">email</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="MESSAGE"
                  required
                />
                <span className={styles.input__error} />
                <div className={styles.input__errorIcon} />
              </div>
            </fieldset>

            <div className={styles.form__button}>
              <button className={`button`}>send message</button>
            </div>
          </form>
        </div>

        <div className={styles.footer__links}>
          <Links />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
