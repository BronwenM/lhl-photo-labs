import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favouritePhoto, setFavouritePhoto] = useState(false);

  const handleClick = () => {
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