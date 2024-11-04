import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import { useEffect, createContext } from "react";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
// import photos from "mocks/photos";
// import topics from "mocks/topics";
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
    toggleFavourite,
    toggleModal,
    loadModalData,
    loadAllPhotosData,
    loadTopicData,
    setTopicID
  } = useApplicationData();
  
  useEffect(() => {
    // console.log('Fetching Data From DB:', currentTopicID ? `/api/topics/photos/${currentTopicID}` : '/api/photos')
  
    fetch(currentTopicID ? `/api/topics/photos/${currentTopicID}` : '/api/photos')
    .then(res => res.json())
    .then(data => loadAllPhotosData(data));
    
    fetch('/api/topics')
    .then(res => res.json())
    .then(data => loadTopicData(data));
    
  }, [currentTopicID])
  
    
  return (
    <PhotosContext.Provider value={{favouritePhotos, toggleFavourite, setTopicID}}>
      <ShowModalContext.Provider value={{toggleModal, loadModalData, modalData}}>
        <div className="App">
          <HomeRoute photos={photoData} topics={topicData} />
          {showModal && <PhotoDetailsModal />}
        </div>
      </ShowModalContext.Provider>
    </PhotosContext.Provider>
  );
};

export default App;
