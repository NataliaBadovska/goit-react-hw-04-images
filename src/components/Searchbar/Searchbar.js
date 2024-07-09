import { useState} from "react";
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
    const [cardsName, setCardsName] = useState('');

    const handleChangeInput = (evt) => {
        const { value } = evt.target;
        setCardsName(value.toLowerCase());
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (cardsName.trim() === '') {
            return
        }

        onSubmit(cardsName);
        resetForm();
    }

    const resetForm = () => {
        setCardsName('');
    }

    return <>
            <header className={css.searchbar}>
                <form className={css.form} onSubmit = {handleSubmit}>
                    <button type="submit" className={css.button}>
                        <span className={css.button_label}>Search</span>
                    </button>
                    <input
                        className={css.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={cardsName}
                        onChange={handleChangeInput}
                    />
                </form>
            </header>
        </>
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;

