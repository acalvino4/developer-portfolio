import {
  ChangeEvent, FC, useMemo, FormEvent
} from 'react';
import { Form } from 'react-bootstrap';
import { debounce } from 'lodash';
import { setGlobalContext } from 'lib/statestore';

// interface SearchBarProps {
//   handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
// }

// const SearchBar: FC<SearchBarProps> = ({ handleSearch }: SearchBarProps) => {
const SearchBar: FC = () => {
  const setSearchTerm = setGlobalContext('searchTerm');
  const handleSearch = useMemo(() => {
    const debounced = debounce((event: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value.toLowerCase());
    }, 500);
    return (event: ChangeEvent<HTMLInputElement>) => {
      event.persist();
      debounced(event);
    };
  }, []);
  return (
    <Form onSubmit={(event: FormEvent<HTMLElement>) => { event.preventDefault(); }}>
      <Form.Group controlId='searchInput'>
        <Form.Label>Search by technology / topic:</Form.Label>
        <Form.Control
          type='text'
          className='fac'
          onChange={handleSearch}
          placeholder=' &#xF002;  javascript, security, react, bootstrap, python...'
        />
      </Form.Group>
    </Form>
  );
};

export default SearchBar;
