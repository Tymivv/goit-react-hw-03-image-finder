import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const modalRootRef = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscPress);
  }

  onEscPress = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(this.props.onClose);
  };

  render() {
    //const { img } = this.props;
    console.log(this.props.largeimage);
    return createPortal(
      <div className={styles.backdrop} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>
          <img src={this.props.largeimage} alt="111" />
        </div>
      </div>,
      modalRootRef,
    );
  }
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

// import { createPortal } from 'react-dom';
// import styles from './Modal.module.css';

// const modalRootRef = document.querySelector('#modal-root');

// const Modal = ({ largeImage }) => {
//   return createPortal(
//     <div className={styles.backdrop} onClick={this.handleBackdropClick}>
//       <div className={styles.modal}>
//         <img src={largeImage} alt="111" />
//       </div>
//     </div>,
//     modalRootRef,
//   );
// };
// export default Modal;
