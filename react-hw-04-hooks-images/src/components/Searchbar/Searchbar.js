import { useState } from 'react';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmite }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'searchQuery':
        setSearchQuery(value);
        break;
      default:
        return;
    }
  };
  const handleFormSubmite = e => {
    e.preventDefault();
    onSubmite(searchQuery);
    formReset();
  };
  const formReset = () => {
    setSearchQuery('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleFormSubmite}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={handleChangeForm}
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
