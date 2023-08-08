import styles from './index.module.scss';
import useForm from './useForm';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';

const Form = () => {
  const { formData, status, onInputChange, onFormSubmit } = useForm();

  return (
    <form onSubmit={onFormSubmit} className={styles.form}>
      <fieldset className={styles.form__fieldset}>
        <div className={styles.input}>
          <label htmlFor="name">name</label>
          <input
            value={formData.name}
            onChange={onInputChange}
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
            value={formData.email}
            onChange={onInputChange}
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
            value={formData.message}
            onChange={onInputChange}
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
        <button disabled={status === 'loading'}>send message</button>
      </div>

      <div className={styles.info}>
        {status === 'success' && (
          <>
            <AiOutlineCheck
              className={`${styles.info__icon} ${styles['info__icon--success']}`}
            />
            <p>Message sent!</p>
          </>
        )}
        {status === 'error' && (
          <>
            <>
              <BiErrorCircle
                className={`${styles.info__icon} ${styles['info__icon--error']}`}
              />
              <p>Couldn&apos;t send message.</p>
            </>
          </>
        )}
      </div>
    </form>
  );
};

export default Form;
