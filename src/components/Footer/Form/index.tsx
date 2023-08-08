import { useState } from 'react';
import styles from './index.module.scss';
import { sendFormData } from './sendFormData';

const formDataInitialState = {
  name: '',
  email: '',
  message: '',
};

const Form = () => {
  const [formData, setFormData] = useState(formDataInitialState);

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await sendFormData(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <fieldset className={styles.form__fieldset}>
        <div className={styles.input}>
          <label htmlFor="name">name</label>
          <input
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
        <button className={`button`}>send message</button>
      </div>
    </form>
  );
};

export default Form;
