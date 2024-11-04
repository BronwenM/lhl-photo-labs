import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import { createContext } from "react";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import photos from "mocks/photos";
import topics from "mocks/topics";
export const FavouritePhotosContext = createContext();
export const ShowModalContext = createContext();

const App = () => {
  const {favouritePhotos, showModal, modalData, toggleFavourite, toggleModal, loadModalData} = useApplicationData(photos, topics);
    
  return (
    <FavouritePhotosContext.Provider value={{favouritePhotos, toggleFavourite}}>
      <ShowModalContext.Provider value={{toggleModal, loadModalData, modalData}}>
        <div className="App">
          <HomeRoute photos={photos} topics={topics} />
          {showModal && <PhotoDetailsModal />}
        </div>
      </ShowModalContext.Provider>
    </FavouritePhotosContext.Provider>
  );
};

export default App;
