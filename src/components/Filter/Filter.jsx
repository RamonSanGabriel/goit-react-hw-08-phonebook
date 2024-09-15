import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filter/filterSelector';
import { setFilter } from '../../redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
