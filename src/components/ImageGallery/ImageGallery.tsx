import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { Image } from '../../types';

interface ImageGalleryProps {
  images: Image[];
  handleIsOpen: (image: Image) => void;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  handleIsOpen,
}) => {
  return (
    <ul className={css.imageGalleryList}>
      {images.map(image => (
        <li key={image.id} className={css.imageCardItem}>
          <ImageCard image={image} handleIsOpen={handleIsOpen} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
