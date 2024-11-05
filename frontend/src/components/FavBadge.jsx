import React, { useContext } from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";
import { PhotosContext } from "App";

const FavBadge = ({ isFavPhotoExist }) => {
  const { showFavouritePhotos } = useContext(PhotosContext);

  return (
    <div className="fav-badge" onClick={showFavouritePhotos}>
      <FavIcon selected={isFavPhotoExist} displayAlert={!!isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;
