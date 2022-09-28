import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import FetchImages from '../axiosCongif';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import s from './App.module.css';

export default class App extends Component {
  state = {
    name: '',
    searchResults: [],
    page: 1,
    status: 'idle',
    showModal: false,
    url: null,
    totalPages: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const name = this.state.name;
    const page = this.state.page;
    if (prevState.name !== name || prevState.page !== page) {
      FetchImages(name, page)
        .then(res => {
          this.setState(prev => ({
            searchResults:
              page === 1
                ? res.data.hits
                : [...prev.searchResults, ...res.data.hits],
            status: 'resolved',
            totalPages: Math.ceil(res.data.totalHits / 12),
          }));
        })
        .catch(error => console.log(error))
        .finally(() => {
          if (page === 1) window.scrollTo(0, 0);
        });
    }
  }

  getSubmitName = (name, page) => {
    this.setState({ name: name, page: page, status: 'pending' });
  };

  loadMore = () => {
    const page = this.state.page + 1;
    this.setState({ status: 'pending', page });
  };

  openModal = idName => {
    const { searchResults } = this.state;
    const URL = searchResults.find(({ id }) => id === idName);
    this.setState({ url: URL?.largeImageURL });
  };

  handleToggleModal = () => {
    return this.setState(prev => ({
      showModal: !prev.showModal,
    }));
  };

  render() {
    const { searchResults, status, showModal, url, totalPages } = this.state;
    const { getSubmitName, loadMore, handleToggleModal, openModal } = this;
    return (
      <div>
        <Searchbar onSubmit={getSubmitName} />
        {totalPages === 0 && <p className={s.text}>Enter the correct name</p>}
        <ImageGallery
          searchResults={searchResults}
          toggle={handleToggleModal}
          openModal={openModal}
        />

        {totalPages !== 0 &&
          this.state.page !== totalPages &&
          status === 'resolved' && <Button onClick={loadMore} />}

        {status === 'pending' && <Loader />}
        {showModal && (
          <Modal getFind={url} onClose={handleToggleModal}>
            <img src={this.state.url} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
