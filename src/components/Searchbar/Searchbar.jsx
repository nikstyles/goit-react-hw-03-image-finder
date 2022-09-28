import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import s from './Searchbar.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    name: '',
    page: 1,
  };

  inputChange = e => {
    this.setState({ name: e.currentTarget.value.toLowerCase() });
  };

  resetForm = () => {
    this.setState({ name: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, page } = this.state;

    if (this.state.name.trim() === '') {
      return toast.error('Input search images and photos', {
        position: 'top-center',
        autoClose: 2000,
      });
    }

    this.props.onSubmit(name, page);
    this.resetForm();
  };

  render() {
    return (
      <>
        <header className={s.searchbar}>
          <form className={s.searchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={s.searchForm_button}>
              <span className={s.searchForm_button_label}>
                <ImSearch size={14} />
              </span>
            </button>

            <input
              className={s.searchForm_input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.name}
              onChange={this.inputChange}
            />
          </form>
        </header>
        <ToastContainer
          theme="colored"
          position="top-center"
          autoClose={2000}
        />
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
