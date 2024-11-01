import React, { useContext } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    id,
    location: { city, country },
    urls: {full, regular},
    user: {username, name, profile}
  } = props.photo;

  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={id}/>
      <img src={regular} alt="image" className="photo-list__image" />
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
