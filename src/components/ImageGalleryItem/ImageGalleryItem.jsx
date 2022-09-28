import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, user, toggle, openModal } = this.props;
    return (
      <>
        <li
          className={s.item}
          key={id}
          onClick={() => {
            openModal(id);
            toggle();
          }}
        >
          <img
            src={webformatURL}
            alt={user}
            className={s.imageGalleryItem_image}
          />
        </li>
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,

  toggle: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
