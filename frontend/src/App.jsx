import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import { useState, createContext } from "react";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
export const FavouritePhotosContext = createContext();

const App = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const addFavourite = (photoID) => {
    const targetPhoto = photos.find(photo => photo.id === photoID);

    favouritePhotos.find(photo => photo.id === photoID) ? setFavouritePhotos(favouritePhotos.filter(photo => photo.id !== photoID)) : setFavouritePhotos(prev => [...prev, targetPhoto]);
  }

  
  return (
    <FavouritePhotosContext.Provider value={{favouritePhotos, addFavourite}}>
      <div className="App">
        <HomeRoute photos={photos} topics={topics}  />
        <PhotoDetailsModal />
      </div>
    </FavouritePhotosContext.Provider>
  );
};

export default App;
