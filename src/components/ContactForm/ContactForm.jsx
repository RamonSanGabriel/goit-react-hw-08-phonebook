import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ContactForm.module.css';
import { selectContacts } from '../../redux/contacts/contactsSelector';
import { addContacts } from '../../redux/contacts/contactsOperations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    // prevent the form refreshing when submitting
    e.preventDefault();

    // if name and number is empty, it will not submit(return)
    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    // if existing contact set an alert, it will not submit(return)
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      Notify.warning(`${name} is already in contacts!`);
      return;
    }
    // dispatch(addContacts({ name: name, number: number }));
    Notify.success(`${name} was successfully added`, {
      position: 'right-top',
    });
    dispatch(addContacts({ name, number }));

    // Reset Form Fields upon submitting
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formField}>
        <p className={css.formLabel}>Name</p>
        <input
          type="text"
          name="name"
          // add \ before - in [' \-] to make it work (LMS)
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label className={css.formField}>
        <p className={css.formLabel}>Number</p>
        <input
          type="tel"
          name="number"
          // add \ before - in [\-.\s] to make it work (LMS)
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button className={css.formButton} type="submit">
        Add Contact
      </button>
    </form>
  );
};
