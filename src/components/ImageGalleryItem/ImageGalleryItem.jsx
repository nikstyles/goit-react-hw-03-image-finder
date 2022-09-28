import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    const { searchResults, toggle, openModal } = this.props;
    return (
      <>
        {searchResults.map(({ id, webformatURL, user }) => (
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
        ))}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggle: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
