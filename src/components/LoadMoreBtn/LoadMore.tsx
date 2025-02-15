import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  handleChangePage: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleChangePage }) => {
  return (
    <div className={css.LoadMoreBtnWrap}>
      <button className={css.loadMoreBtn} onClick={handleChangePage}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
