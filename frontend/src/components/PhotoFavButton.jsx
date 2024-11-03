import React, { useState, useContext } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { FavouritePhotosContext } from 'App';

function PhotoFavButton(props) {
  const {addFavourite, favouritePhotos} = useContext(FavouritePhotosContext);

  const handleClick = () => {
    addFavourite(props.photoId);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favouritePhotos.filter(photo => photo.id === props.photoId).length > 0 ? true : false}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;