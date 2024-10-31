import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    id,
    location: { city, country },
    imageSource,
    username,
    profile,
  } = props.photo;

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img src={imageSource} alt="image" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img
          src={profile}
          alt="user profile"
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          {username}
          <div className="photo-list__user-location">
            {city}, {country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
