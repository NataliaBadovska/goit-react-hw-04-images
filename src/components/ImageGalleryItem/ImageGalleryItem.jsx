import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'
import Modal from 'components/Modal';

function ImageGalleryItem({ card }) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return <>
            <li className={css.imageGalleryItem} >
                <img src={card.webformatURL} alt={card.tags} className={css.imageGalleryItem_image} onClick={toggleModal} />
            </li>
            {showModal && <Modal largeImageURL={card.largeImageURL} tags={card.tags} closeModal={toggleModal} />} 
        </>
}

ImageGalleryItem.propTypes = {
    card: PropTypes.object.isRequired,
}

export default ImageGalleryItem;