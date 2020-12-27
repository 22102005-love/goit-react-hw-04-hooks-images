import s from './Button.module.css';
const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={s.ButtonWrapper}>
      <button className={s.Button} type="button" onClick={() => onClick()}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
