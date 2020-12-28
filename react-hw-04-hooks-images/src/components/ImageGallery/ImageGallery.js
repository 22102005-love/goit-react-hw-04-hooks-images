import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';

export default function ImageGallery({ images }) {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });

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
    </div>
  );
}
