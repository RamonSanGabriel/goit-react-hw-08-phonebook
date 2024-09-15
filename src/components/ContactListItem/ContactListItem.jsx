import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { deleteContacts } from '../../redux/contacts/contactsOperations';

export const ContactListItem = ({ filteredContact }) => {
  const dispatch = useDispatch();

  const handleDeleteFulfilled = () => {
    dispatch(deleteContacts(filteredContact.id));
    Notify.success(`${filteredContact.name} was deleted`, {
      position: 'right-bottom',
    });
  };

  return (
    <div>
      <li>
        <p>{filteredContact.name}:</p>
        <p>{filteredContact.number}</p>
        <button onClick={handleDeleteFulfilled}>Delete</button>
      </li>
    </div>
  );
};
ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
};
