import styles from './index.module.scss';

const ContactButton = () => {
  const onButtonClick = () => {
    const footerElement = document.querySelector<HTMLElement>('#footer');

    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={onButtonClick} className={styles.contactButton}>
      contact me
    </button>
  );
};

export default ContactButton;
