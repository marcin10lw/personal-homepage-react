import { AiOutlineCheck } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';

import styles from './index.module.scss';
import useCustomForm from './useCustomForm';

const Form = () => {
  const { errors, handleSubmit, onFormSubmit, register, status } =
    useCustomForm();

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className={styles.form}>
      <fieldset className={styles.form__fieldset}>
        <div
          className={`${styles.input} ${
            errors.name ? styles['input--error'] : ''
          }`}
        >
          <label htmlFor="name">name</label>
          <input
            {...register('name')}
            id="name"
            type="text"
            placeholder="NAME"
          />
          {errors.name && (
            <>
              <span className={styles.input__errorMessage}>
                {errors.name.message}
              </span>
              <div className={styles.input__errorIcon} />
            </>
          )}
        </div>

        <div
          className={`${styles.input} ${
            errors.email ? styles['input--error'] : ''
          }`}
        >
          <label htmlFor="email">email</label>
          <input
            {...register('email')}
            id="email"
            type="email"
            placeholder="EMAIL"
          />
          {errors.email && (
            <>
              <span className={styles.input__errorMessage}>
                {errors.email.message}
              </span>
              <div className={styles.input__errorIcon} />
            </>
          )}
        </div>

        <div
          className={`${styles.input} ${
            errors.message ? styles['input--error'] : ''
          }`}
        >
          <label htmlFor="message">email</label>
          <textarea
            {...register('message')}
            id="message"
            placeholder="MESSAGE"
          />
          {errors.message && (
            <>
              <span className={styles.input__errorMessage}>
                {errors.message.message}
              </span>
              <div className={styles.input__errorIcon} />
            </>
          )}
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
            <BiErrorCircle
              className={`${styles.info__icon} ${styles['info__icon--error']}`}
            />
            <p>Couldn&apos;t send message.</p>
          </>
        )}
      </div>
    </form>
  );
};

export default Form;
