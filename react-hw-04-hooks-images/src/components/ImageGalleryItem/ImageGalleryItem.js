import { useState } from 'react';
import Modal from '../Modal/Modal';
import s from './ImageGalleryItem.module.css';
export default function ImageGalleryItem({ src, srcForLarge }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <li onClick={toggleModal} className={s.ImageGalleryItem}>
        <img src={src} alt="" className={s.ImageGalleryItemImage} />
      </li>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={srcForLarge} alt="большая картинка"></img>
        </Modal>
      )}
    </div>
  );
}
