import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {id, city, country, image, username, profileImage} = props;

  return (
    <div className="photo-item">
      <img src={image} alt="image"/>
      <div className="photo-user">
        <img src={profileImage} alt="user profile"/>
        <span className="photo-user-username">{username}</span>
        <span className="photo-user-location">{city}, {country}</span>
      </div>
    </div>
  );
};

export default PhotoListItem;
