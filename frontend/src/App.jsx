import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import { useState, createContext } from "react";
export const FavouritePhotosContext = createContext();

const App = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const addFavourite = (photoID) => {
    const targetPhoto = photos.find(photo => photo.id === photoID);

    favouritePhotos.find(photo => photo.id === photoID) ? setFavouritePhotos(favouritePhotos.filter(photo => photo.id !== photoID)) : setFavouritePhotos(prev => [...prev, targetPhoto]);
  }

  
  return (
    <FavouritePhotosContext.Provider value={addFavourite}>
      <div className="App">
        <HomeRoute photos={photos} topics={topics}  />
      </div>
    </FavouritePhotosContext.Provider>
  );
};

export default App;
