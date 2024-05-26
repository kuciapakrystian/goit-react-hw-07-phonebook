import { useDispatch } from 'react-redux';
import { updateFilterValue } from 'Redux/filterSlice';

import { Input } from '../ContactList/ContactList.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch(updateFilterValue(value));
  };

  return (
    <Input
      type="text"
      name="filter"
      placeholder="Search contacts"
      onChange={handleChange}
    />
  );
};

export default Filter;