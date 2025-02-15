import Modal from 'react-modal';
import { useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import css from './ImageModal.module.css';
import { Image } from '../../types';

interface ImageModalProps {
  isOpen: boolean;
  image: Image;
  onClose: () => void;
}
Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, image, onClose }) => {
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
    <Modal isOpen={isOpen} onRequestClose={onClose}>
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
};

export default ImageModal;
