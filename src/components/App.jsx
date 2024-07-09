import { useState, useEffect} from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import fetchApi from "services/card_api";
import Button from "./Button";
import Loader from "./Loader/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [cardsName, setCardsName] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
    
  useEffect(() => {
    if (cardsName) {
      setLoading(true);
      
      fetchApi(cardsName, page)
        .then(images => setImages(prevImages => [...prevImages, ...images.hits]))
        .finally(() => setLoading(false));
    }
  },[cardsName, page])

  const getPage = (page) => {
    setPage(page); 
  }

  const getsInputValue = (cardsName) => {
    setImages([]);
    setCardsName(cardsName);
  }

  return (
      <div>
        <Searchbar onSubmit={getsInputValue} />
        {images && <ImageGallery fethInfo={images} />}
        {loading && <Loader />}
        {images.length !== 0 && <Button onClick={getPage} />}
    </div>
    );
}

export default App;
