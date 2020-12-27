import { useState } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import './App.css';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddSearchQuery = searchQuery => {
    setSearchQuery(searchQuery);
  };

  return (
    <div>
      <Searchbar onSubmite={handleAddSearchQuery} />
      <ImageGallery searchQuery={searchQuery} />
    </div>
  );
}
