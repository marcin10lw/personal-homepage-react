import styles from './index.module.scss';
import imageDesktop from 'assets/images/image-profile-desktop.webp';
import imageTablet from 'assets/images/image-profile-tablet.webp';
import imageMobile from 'assets/images/image-profile-mobile.webp';
import ContactButton from 'components/ContactButton';

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={`container ${styles.hero}`}>
        <article className={styles.hero__article}>
          <h1 className={`heading ${styles.hero__heading}`}>
            <span>Nice to meet you!</span> I&apos;m <strong>Marcin Augun</strong>.
          </h1>
          <p className={styles.hero__description}>
            Based in Poland, I’m a front-end developer passionate about building accessible web apps that users love.
          </p>
          <div className={styles.hero__button}>
            <ContactButton />
          </div>
        </article>

        <picture className={styles.hero__picture}>
          <source media="(max-width: 576px)" srcSet={imageMobile} />
          <source media="(max-width: 992px)" srcSet={imageTablet} />
          <img src={imageDesktop} alt="Marcin Augun" />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
