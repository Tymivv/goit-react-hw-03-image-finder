import { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import Modal from '../Modal/Modal';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import styles from './App.module.css';
import fetchData from '../servises/articlesApi';
//import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    articles: [],
    loader: false,
    error: null,
    image: '',

    page: 1,
  };

  handleFormSubmit = image => {
    this.setState({ image });
    console.log(image);
  };

  componentDidUpdate(prevProps, prevState) {
    const { image, page } = this.state;

    if (prevState.image !== image || prevState.page !== page) {
      this.apiRequest();
    }
  }

  nextPages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  apiRequest = async () => {
    const { image, page } = this.state;
    this.setState({ loader: true });
    try {
      const newArticles = await fetchData(image, page);
      this.setState(prevState => ({
        articles:
          prevState.image !== image
            ? [...prevState.articles, ...newArticles.hits]
            : [...newArticles.hits],
        // articles: [...prevState.articles, ...newArticles.hits],
      }));
      return newArticles.hits;
    } catch (error) {
      toast.warn(`${error.message}`);
    } finally {
      this.setState({ loader: false });
      if (this.state.articles.length === 0) {
        toast.error('Картинок ненайдено');
      }
    }
  };

  render() {
    const { articles, loader, error } = this.state;

    return (
      <div className={styles.SearchForminput}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.openModal && (
          <Modal img={this.state.articles.largeImageURL} />
        )}
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {loader && (
          <Loader
            type="ThreeDots"
            color="#d35050"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {articles.length > 0 && <ImageGallery articles={articles} />}
        {articles.length > 0 && (
          <Button image={this.state.image} onClick={this.nextPages} />
        )}
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default App;
