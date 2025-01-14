import { useState, useEffect } from 'react';
import { fetchImages } from '../services/api';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import toast from 'react-hot-toast';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMore';
import ImageModal from './ImageModal/ImageModal';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getImagesData = async () => {
      if (!query) return;
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages(query, page);
        setImages(prev => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setIsError(true);
        console.log(error);
        toast.error('Something went wrong! Please try again...');
      } finally {
        setIsLoading(false);
      }
    };
    getImagesData();
  }, [page, query]);

  const handleChangePage = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
    }
  };
  const handleImageClick = image => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  const handleChangeQuery = newQuery => {
    if (newQuery === query) {
      toast.error('Please change query');
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <div>
      <SearchBar onSubmit={handleChangeQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images && images.length > 0 && (
        <ImageGallery images={images} handleIsOpen={handleImageClick} />
      )}
      {images && images.length > 0 && page < totalPages && (
        <LoadMoreBtn handleChangePage={handleChangePage} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          image={selectedImage}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}
