import Modal from 'react-modal';
import { useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import css from './ImageModal.module.css';
export default function ImageModal({ isOpen, image, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      appElement={document.getElementById('root')}
    >
      <div className={css.modalWrap}>
        <img
          className={css.imageModal}
          src={image.urls.regular}
          alt={image.alt_description}
        />
        <div className={css.modalTextWrap}>
          <p className={css.modalText}>
            <FaUser />
            {image.user.name}
          </p>
          <p className={css.modalText}>
            <FaHeart />
            {image.likes}
          </p>
        </div>
      </div>
    </Modal>
  );
}
