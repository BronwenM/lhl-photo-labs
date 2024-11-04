import { useReducer } from "react"

export const ACTIONS = {
  TOGGLE_FAV_PHOTO: 'TOGGLE_FAV_PHOTO',
  TOGGLE_MODAL_VIEW: 'TOGGLE_MODAL_VIEW',
  SET_MODAL_DATA: 'SET_MODAL_DATA',
  LOAD_PHOTO_DATA: 'LOAD_PHOTO_DATA',
  LOAD_TOPIC_DATA:'LOAD_TOPIC_DATA',
}

const initialState = {
  favouritePhotos: [],
  showModal: false,
  modalData: {},
  photoData: [],
  topicData: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAV_PHOTO':
      const targetPhoto = action.photos.find(photo => photo.id === action.photoID);
      console.log('[...state.favouritePhotos, targetPhoto]', [...state.favouritePhotos, targetPhoto])
      return {
        ...state,
        favouritePhotos: state.favouritePhotos.find(photo => photo.id === action.photoID) ? state.favouritePhotos.filter(photo => photo.id !== action.photoID) : [...state.favouritePhotos, targetPhoto]
      }

    case 'TOGGLE_MODAL_VIEW':
      return {...state, showModal: !state.showModal}

    case 'SET_MODAL_DATA':
      return {
        ...state,
        modalData: { ...action.photoObj }
      }

    case 'LOAD_PHOTO_DATA':
      return {
        ...state,
        photoData: [...action.data]
      }

    case 'LOAD_TOPIC_DATA':
      return {
        ...state,
        topicData: [...action.data]
      }

    default:
      throw new Error(`ERROR! BAD ACTION ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavourite = (photoID) => {
    dispatch({type: 'TOGGLE_FAV_PHOTO', photoID, photos: state.photoData});
  }

  const toggleModal = () => {
    dispatch({type: 'TOGGLE_MODAL_VIEW'});
  }

  const loadModalData = (photoObj) => {
    dispatch({type: 'SET_MODAL_DATA', photoObj});
  }

  const loadPhotosData = (data) => {
    dispatch({type: 'LOAD_PHOTO_DATA', data});
  }

  const loadTopicData = (data) => {
    dispatch({type: 'LOAD_TOPIC_DATA', data})
  }

  return { photoData: state.photoData, topicData: state.topicData, favouritePhotos: state.favouritePhotos, showModal: state.showModal, modalData: state.modalData, toggleFavourite, toggleModal, loadModalData, loadPhotosData, loadTopicData }
}

export default useApplicationData;