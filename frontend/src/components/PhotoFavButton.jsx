import React, { useState, useContext } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { FavouritePhotosContext } from 'App';

function PhotoFavButton(props) {
  const [favouritePhoto, setFavouritePhoto] = useState(false);

  const addFavourite = useContext(FavouritePhotosContext);
  // console.log(addFavourite);

  const handleClick = () => {
    addFavourite(props.photoId);
    setFavouritePhoto(prev => !prev)
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favouritePhoto}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;