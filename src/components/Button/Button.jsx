import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ onClick }) {
  return (
    <button type="button" className={s.button} onClick={onClick}>
      <span className={s.buttonLabele}>Load more</span>
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
