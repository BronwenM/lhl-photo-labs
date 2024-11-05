import React, { useEffect, useContext } from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import { ShowModalContext } from "App";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = () => {
  const { toggleModal, modalData } = useContext(ShowModalContext);

  const {
    id,
    location: { city, country },
    urls: { full, regular },
    user: { username, name, profile },
    similar_photos,
  } = modalData;

  const similarPhotosArr = Object.values(similar_photos);

  //Handle "Similar Photos" section LtR scroll buttons
  const handleScrollLeft = () => {
    document.querySelector(".photo-details-modal__images .photo-list").scrollLeft -= 400;
  }

  const handleScrollRight = () => {
    document.querySelector(".photo-details-modal__images .photo-list").scrollLeft += 400;
  }

  //Scroll to top and reset side to side scroll when the modal data changes (when looking at associated photos)
  useEffect(() => {
    document.querySelector(".photo-details-modal__content").scrollTop = 0;
    document.querySelector(".photo-details-modal__images .photo-list").scrollLeft = 0;
  }, [modalData])
  

  return (
    <div>
      <div className="photo-details-modal" onClick={toggleModal}></div>
      <div className="photo-details-modal__content">
        <button
          className="photo-details-modal__close-button"
          onClick={toggleModal}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <div className="photo-details-modal__image-details">
          <PhotoFavButton photoId={id} />
          <img
            src={full}
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
            <button onClick={handleScrollLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
            </button>
              <PhotoList photos={similarPhotosArr} />
            <button onClick={handleScrollRight}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
