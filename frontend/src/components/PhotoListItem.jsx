import React, { useContext } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { PhotosContext, ShowModalContext } from "App";

const PhotoListItem = (props) => {
  const {
    id,
    location: { city, country },
    urls: { full, regular },
    user: { username, name, profile },
  } = props.photo;

  const { toggleModal, loadModalData, showModal } = useContext(ShowModalContext);
  const { photoData} = useContext(PhotosContext);

  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={id} />
      <div style={{cursor: "pointer"}}
        onClick={() => {
          if(!showModal) {
            toggleModal();
            loadModalData(props.photo);
          } else {
            const newModalData = photoData.find(photo => photo.id === id)
            loadModalData(newModalData);
          }
        }}
      >
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
    </div>
  );
};

export default PhotoListItem;
