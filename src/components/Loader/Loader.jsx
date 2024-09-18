import { SyncLoader } from 'react-spinners';
// import PropTypes from 'prop-types';
import css from './Loader.module.css';

export const Loader = () => {
  return <SyncLoader className={css.loader} color="#e85d04" />;
};

/* Loader.propTypes = {
  className: PropTypes.string,
}; */
