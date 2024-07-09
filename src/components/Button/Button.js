import { useState} from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css'

function LoadMore({onClick}) {
    const [page, setPage] = useState(2);

      const loadMoreClick = () => {     
        setPage(prevPage=> ( prevPage + 1 ))
        onClick(page)
    }

    return <button type="button" className={css.button} onClick={loadMoreClick}>Load more</button>
}

LoadMore.propTypes = {
    onClick: PropTypes.func,
}
 
export default LoadMore;

    