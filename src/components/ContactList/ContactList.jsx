import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectIsError,
  selectFilteredContacts,
} from '../../redux/contacts/contactsSelector';
import { fetchContacts } from '../../redux/contacts/contactsOperations';
import { Loader } from '../Loader/Loader';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {/* if loading and not error, show Loader */}
      {isLoading && !isError && <Loader />}
      {/*      if not loading, not error and filtered contacts is empty, show warning */}
      {!isLoading && !isError && filteredContacts.length === 0 && (
        <p>The Phonebook is empty. Please add a contact</p>
      )}
      {/*    if not load, not error and have atleast 1 filtered contact, show
      ContactListItem */}
      {!isLoading &&
        !isError &&
        filteredContacts.length > 0 &&
        filteredContacts.map(filteredContact => (
          /*  <ContactListItem key={filteredContact.id} contact={filteredContact} /> */
          <ContactListItem
            key={filteredContact.id}
            filteredContact={filteredContact}
          />
        ))}
    </ul>
  );
};
