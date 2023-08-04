import styles from './index.module.scss';
import imageDesktop from 'assets/images/image-profile-desktop.webp';
import imageTablet from 'assets/images/image-profile-tablet.webp';
import imageMobile from 'assets/images/image-profile-mobile.webp';

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={`container ${styles.hero}`}>
        <article className={styles.hero__article}>
          <h1 className={styles.hero__heading}>
            <span>
              <span>Nice to</span> meet you!
            </span>{' '}
            <span>
              I&apos;m <strong>Marcin Augun</strong>.
            </span>
          </h1>
          <p className={styles.hero__description}>
            Based in Poland, I’m a front-end developer passionate about building accessible web apps that users love.
          </p>
          <button className={`button ${styles.hero__button}`}>contact me</button>
        </article>

        <picture className={styles.hero__picture}>
          <source media="(max-width: 767px)" srcSet={imageMobile} />
          <source media="(max-width: 992px)" srcSet={imageTablet} />
          <img src={imageDesktop} alt="Marcin Augun" />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
