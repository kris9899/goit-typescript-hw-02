import { useState } from 'react';
import toast from 'react-hot-toast';
import { Search } from 'lucide-react';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() === '') {
      toast.error('Search form needs to be fulfilled', {
        style: { duration: 2000, position: 'top-right' },
      });
      return;
    }

    onSubmit(value);
    setValue('');
  };
  return (
    <header className={css.headerSearchBar}>
      <form onSubmit={handleSubmit} className={css.formSearchBar}>
        <input
          className={css.inputSearcBar}
          onChange={e => setValue(e.target.value)}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.buttonSearchBar} type="submit">
          <Search />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
