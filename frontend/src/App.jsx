import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import { useEffect, createContext } from "react";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
// import photos from "mocks/photos";
// import topics from "mocks/topics";
export const FavouritePhotosContext = createContext();
export const ShowModalContext = createContext();

const App = () => {
  const {photoData, topicData, favouritePhotos, showModal, modalData, toggleFavourite, toggleModal, loadModalData, loadPhotosData, loadTopicData} = useApplicationData();
  
  useEffect(() => {
    fetch('/api/photos')
    .then(res => res.json())
    .then(data => loadPhotosData(data));
    
    fetch('/api/topics')
    .then(res => res.json())
    .then(data => loadTopicData(data));
    
  }, [])
  
    
  return (
    <FavouritePhotosContext.Provider value={{favouritePhotos, toggleFavourite}}>
      <ShowModalContext.Provider value={{toggleModal, loadModalData, modalData}}>
        <div className="App">
          <HomeRoute photos={photoData} topics={topicData} />
          {showModal && <PhotoDetailsModal />}
        </div>
      </ShowModalContext.Provider>
    </FavouritePhotosContext.Provider>
  );
};

export default App;
