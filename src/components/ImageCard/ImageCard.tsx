import css from './ImageCard.module.css';
import { Image } from '../../types';

interface ImageCardProps {
  image: Image;
  handleIsOpen: (image: Image) => void;
}
const ImageCard: React.FC<ImageCardProps> = ({ image, handleIsOpen }) => {
  return (
    <div className={css.ImageCardWrap}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => handleIsOpen(image)}
      />
    </div>
  );
};
export default ImageCard;
