import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../../../redux/contacts/contactsOperations';
import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { selectIsLoading } from '../../../redux/contacts/contactsSelector';

const TaskPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Task Page</title>
      </Helmet>
      {/* <TaskEditor /> */}
      <div>{isLoading && 'Requesting in progress...'}</div>
    </HelmetProvider>
  );
};

export default TaskPage;
