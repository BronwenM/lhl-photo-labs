import React, { useContext } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { ShowModalContext } from "App";

const PhotoListItem = (props) => {
  const {
    id,
    location: { city, country },
    urls: {full, regular},
    user: {username, name, profile}
  } = props.photo;

  const {setShowModal, setModalData} = useContext(ShowModalContext);

  return (
    <div className="photo-list__item" onClick={() => {setShowModal(prev => !prev); setModalData({...props.photo})}}>
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
