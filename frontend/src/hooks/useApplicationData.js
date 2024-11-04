import { useState } from "react"
import photos from "mocks/photos";
import topics from "mocks/topics";

const useApplicationData = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const toggleFavourite = (photoID) => {
    const targetPhoto = photos.find(photo => photo.id === photoID);

    favouritePhotos.find(photo => photo.id === photoID) ? setFavouritePhotos(favouritePhotos.filter(photo => photo.id !== photoID)) : setFavouritePhotos(prev => [...prev, targetPhoto]);
  }

  const toggleModal = () => {
    setShowModal(prev => !prev)
  }

  const loadModalData = (photoObj) => {
    setModalData({ ...photoObj });
  }

  return {photos, topics, favouritePhotos, showModal, modalData, toggleFavourite, toggleModal, loadModalData}
}

export default useApplicationData;