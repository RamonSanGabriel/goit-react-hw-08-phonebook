import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContacts,
  addContacts,
} from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
  // state.isError = false;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.error.message;
};

const handleFetchFulfilled = (state, action) => {
  state.isLoading = false;
  state.isError = null;
  state.items = action.payload;
};

const handleAddFulfilled = (state, action) => {
  state.isLoading = false;
  state.isError = null;
  state.items.push(action.payload);
};

const handleDeleteFulfilled = (state, action) => {
  state.isLoading = false;
  state.isError = null;
  state.items = state.items.filter(item => item.id !== action.payload.id);
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  // reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, handleFetchFulfilled)
      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.rejected, handleRejected)
      .addCase(addContacts.fulfilled, handleAddFulfilled)
      .addCase(deleteContacts.pending, () => {})
      .addCase(deleteContacts.rejected, handleRejected)
      .addCase(deleteContacts.fulfilled, handleDeleteFulfilled),
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

/* export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    initialContacts: [
         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.initialContacts.push(action.payload);
      },
      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name: name.trim(),
            number: number.trim(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      const index = state.initialContacts.findIndex(
        contact => contact.id === action.payload
      );
      state.initialContacts.splice(index, 1);
    },
  },
}); */
