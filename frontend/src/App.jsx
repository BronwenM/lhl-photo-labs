import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import { useEffect, createContext } from "react";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
export const PhotosContext = createContext();
export const ShowModalContext = createContext();

const App = () => {
  const { 
    photoData,
    topicData,
    currentTopicID,
    favouritePhotos,
    showModal,
    modalData,
    singlePhotoData,
    toggleFavourite,
    toggleModal,
    loadModalData,
    loadAllPhotosData,
    loadTopicData,
    setTopicID,
    showFavouritePhotos
  } = useApplicationData();
  
  useEffect(() => {

    fetch(currentTopicID ? `/api/topics/photos/${currentTopicID}` : '/api/photos')
      .then(res => res.json())
      .then(data => loadAllPhotosData(data));
    
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => loadTopicData(data));
    
  }, [currentTopicID])
  
    
  return (
    <PhotosContext.Provider value={{favouritePhotos, toggleFavourite, setTopicID, currentTopicID, photoData, showFavouritePhotos}}>
      <ShowModalContext.Provider value={{toggleModal, loadModalData, modalData, showModal}}>
        <div className="App">
          <HomeRoute photos={photoData} topics={topicData} />
          {showModal && <PhotoDetailsModal />}
        </div>
      </ShowModalContext.Provider>
    </PhotosContext.Provider>
  );
};

export default App;
