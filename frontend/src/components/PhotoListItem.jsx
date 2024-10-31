import React from "react";
import "../styles/PhotoListItem.scss";

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
