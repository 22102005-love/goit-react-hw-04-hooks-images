import { useState, useEffect } from 'react';
import s from './ImageGallery.module.css';
import api from '../../servises/searchQuery-api';
import LoadMoreBtn from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Spiner from '../Loader/Loader.js';

export default function ImageGallery({ searchQuery }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setIsLoader(true);
    setImages([]);
    api.fetchImagesWithQuery(searchQuery, page).then(newImages => {
      setImages([...images, ...newImages.hits]);
      setPage(page + 1);
      setIsLoader(false);
    });
  }, [searchQuery]);
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });

  const handleLoadMore = () => {
    setIsLoader(true);
    setPage(page + 1);
    return api.fetchImagesWithQuery(searchQuery, page).then(newImages => {
      setImages([...images, ...newImages.hits]);
      setPage(page + 1);
      setIsLoader(false);
    });
  };

  return (
    <div>
      <ul className={s.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            srcForLarge={image.largeImageURL}
            src={image.webformatURL}
            key={image.id}
          />
        ))}
      </ul>
      {isLoader && <Spiner />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  );
}
