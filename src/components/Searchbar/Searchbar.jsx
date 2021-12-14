import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import styles from './Searchbar.module.css';

//const styles = { form: { marginBottom: 20 } };

export default class Searchbar extends Component {
  state = {
    image: '',
  };

  handleNameChange = event => {
    this.setState({ image: event.currentTarget.value.toLowerCase() });
    if (this.state.image.trim() === '') {
      return;
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.image.trim() === '') {
      toast.error('Введите имя картинки.');
      console.log(this.state.image);
      return;
    }

    this.props.onSubmit(this.state.image);
    this.setState({ image: '' });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form
          className={styles.SearchForm}
          onSubmit={this.handleSubmit}
          style={styles.form}
        >
          <input
            className={styles.SearchForminput}
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleNameChange}
            placeholder="Search images and photos"
          />
          <button type="submit" className={styles.SearchFormbutton}>
            {<ImSearch />}
            <span className={styles.SearchFormbuttonlabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
