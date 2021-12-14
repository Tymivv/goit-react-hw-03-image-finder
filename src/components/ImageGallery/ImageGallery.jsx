import { Component } from 'react';
import Modal from '../Modal/Modal';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    openModal: false,
    largeimage: '',
  };
  onClose = () => {
    this.setState({ openModal: false });
  };

  getImglarge = e => {
    if (e.target === e.currentTarget) {
      return;
    }
    // console.log(e.target.closest('li'));
    // console.log(e.target.a);
    const openModalGallery = e.target.closest('li').getAttribute('a');
    // console.log(openModalGallery);

    this.setState({ largeimage: openModalGallery, openModal: true });
    // this.setState({ openModal: true });
    //console.log(this.state.openModal);
  };
  //const ImageGallery = ({ articles }) => (
  render() {
    console.log(this.state);
    return (
      <>
        <ul className={styles.ImageGallery} onClick={this.getImglarge}>
          <ImageGalleryItem articles={this.props.articles} />
        </ul>
        {this.state.openModal && (
          <Modal onClose={this.onClose} largeimage={this.state.largeimage} />
        )}
      </>
    );
  }
}

export default ImageGallery;
