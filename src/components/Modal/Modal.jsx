import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyUp);
  }

  handleKeyUp = e => {
    if (e.code === 'Escape') {
      this.props.onCloseRequest();
      window.removeEventListener('keyup', this.handleKeyUp, false);
    }
  };

  handleOutsideClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseRequest();
    }
  };

  render() {
    return (
      <div className={s.overlay} onClick={this.handleOutsideClick}>
        <div className={s.modal}>{this.props.children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  onCloseRequest: PropTypes.func.isRequired,
};
