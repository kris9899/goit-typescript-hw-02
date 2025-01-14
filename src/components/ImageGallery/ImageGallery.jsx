import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
export default function ImageGallery({ images, handleIsOpen }) {
  return (
    <ul className={css.imageGalleryList}>
      {images.map(image => (
        <li key={image.id} className={css.imageCardItem}>
          <ImageCard image={image} handleIsOpen={handleIsOpen} />
        </li>
      ))}
    </ul>
  );
}
