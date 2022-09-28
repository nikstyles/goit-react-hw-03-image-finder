import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';

export default class ImageGallery extends Component {
  render() {
    const { searchResults, toggle, openModal } = this.props;

    return (
      <ul className={s.imageGallery}>
        {searchResults.map(({ id, webformatURL, user }) => (
          <ImageGalleryItem
            id={id}
            webformatURL={webformatURL}
            user={user}
            toggle={toggle}
            openModal={openModal}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggle: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
