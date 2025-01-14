import css from './ImageCard.module.css';

export default function ImageCard({ image, handleIsOpen }) {
  return (
    <div className={css.ImageCardWrap}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => handleIsOpen(image)}
      />
    </div>
  );
}
