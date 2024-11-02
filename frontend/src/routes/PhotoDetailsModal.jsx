import React, { useContext } from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import { ShowModalContext } from "App";

const PhotoDetailsModal = () => {
  const {setShowModal, modalData} = useContext(ShowModalContext);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setShowModal(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
        <div>
          {console.log(modalData)}
        </div>
    </div>
  )
};

export default PhotoDetailsModal;
