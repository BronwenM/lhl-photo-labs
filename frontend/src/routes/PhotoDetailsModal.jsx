import React, { useContext } from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import { ShowModalContext } from "App";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = () => {
  const { setShowModal, modalData } = useContext(ShowModalContext);

  const {
    id,
    location: { city, country },
    urls: { full, regular },
    user: { username, name, profile },
    similar_photos,
  } = modalData;

  const similarPhotosArr = Object.values(similar_photos);

  return (
    <div className="photo-details-modal" onClick={() => setShowModal(false)}>
      <div className="photo-details-modal__content">
        <button
          className="photo-details-modal__close-button"
          onClick={() => setShowModal(false)}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <div className="photo-details-modal__image-details">          
            <PhotoFavButton photoId={id} />
            <img
              src={regular}
              alt="full-sized image"
              className="photo-details-modal__image"
            />
          
          <div className="photo-details-modal__photographer-details">
            <img
              src={profile}
              alt="user profile"
              className="photo-details-modal__photographer-profile"
            />
            <div>
              <span>{username}</span>
              <div className="photo-details-modal__photographer-location">
                {city}, {country}
              </div>
            </div>
          </div>
          <hr />
          <h4 className="photo-details-modal__header">Similar Photos</h4>
          <div className="photo-details-modal__images">
            <PhotoList photos={similarPhotosArr} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
