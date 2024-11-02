import React, { useContext } from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import { ShowModalContext } from "App";

const PhotoDetailsModal = () => {
  const setShowModal = useContext(ShowModalContext);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setShowModal(prev => !prev)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
