import { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/Button/Button';
import api from './servises/searchQuery-api';
import Spiner from './components/Loader/Loader.js';
import './App.css';

export default function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoader, setIsLoader] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setIsLoader(true);
    api.fetchImagesWithQuery(searchQuery, page).then(newImages => {
      setImages([...newImages.hits]);
      setPage(page => page + 1);
      setIsLoader(false);
    });
  }, [searchQuery]);

  const handleLoadMoreImages = () => {
    setIsLoader(true);
    return api.fetchImagesWithQuery(searchQuery, page).then(newImages => {
      setImages([...images, ...newImages.hits]);
      setPage(page => page + 1);
      setIsLoader(false);
    });
  };

  return (
    <div>
      <Searchbar onSubmite={setSearchQuery} />
      <ImageGallery images={images} />
      {isLoader && <Spiner />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMoreImages} />}
    </div>
  );
}
