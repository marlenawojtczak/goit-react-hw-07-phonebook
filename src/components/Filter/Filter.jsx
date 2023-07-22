import { Form, Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Form>
      <Label>
        Find contacts by name
        <Input type="text" value={filter} onChange={onChangeFilter} />
      </Label>
    </Form>
  );
};

export default Filter;
