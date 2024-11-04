import { useReducer } from "react"

export const ACTIONS = {
  TOGGLE_FAV_PHOTO: 'TOGGLE_FAV_PHOTO',
  TOGGLE_MODAL_VIEW: 'TOGGLE_MODAL_VIEW',
  SET_MODAL_DATA: 'SET_MODAL_DATA',
  LOAD_ALL_PHOTO_DATA: 'LOAD_ALL_PHOTO_DATA',
  LOAD_TOPIC_DATA: 'LOAD_TOPIC_DATA',
  SET_PHOTOS_TOPIC: 'SET_PHOTOS_TOPIC',
}

const initialState = {
  favouritePhotos: [],
  showModal: false,
  modalData: {},
  photoData: [],
  topicData: [],
  currentTopicID: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAV_PHOTO':
      const targetPhoto = action.photos.find(photo => photo.id === action.photoID);
      return {
        ...state,
        favouritePhotos: state.favouritePhotos.find(photo => photo.id === action.photoID) ? state.favouritePhotos.filter(photo => photo.id !== action.photoID) : [...state.favouritePhotos, targetPhoto]
      }

    case 'TOGGLE_MODAL_VIEW':
      return { ...state, showModal: !state.showModal }

    case 'SET_MODAL_DATA':
      return {
        ...state,
        modalData: { ...action.photoObj }
      }

    case 'LOAD_ALL_PHOTO_DATA':
      return {
        ...state,
        photoData: [...action.data]
      }

    case 'LOAD_TOPIC_DATA':
      return {
        ...state,
        topicData: [...action.data]
      }

    case 'SET_PHOTOS_TOPIC': 
      return { ...state, currentTopicID: action.topicID }

    default:
      throw new Error(`ERROR! BAD ACTION ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavourite = (photoID) => {
    dispatch({ type: 'TOGGLE_FAV_PHOTO', photoID, photos: state.photoData });
  }

  const toggleModal = () => {
    dispatch({ type: 'TOGGLE_MODAL_VIEW' });
  }

  const loadModalData = (photoObj) => {
    dispatch({ type: 'SET_MODAL_DATA', photoObj });
  }

  const loadAllPhotosData = (data) => {
    dispatch({ type: 'LOAD_ALL_PHOTO_DATA', data });
  }

  const loadTopicData = (data) => {
    dispatch({ type: 'LOAD_TOPIC_DATA', data })
  }

  const loadPhotosByTopic = (data) => {
    dispatch({ type: 'GET_PHOTOS_BY_TOPICS', data })
  }

  const setTopicID = (topicID) => {
    dispatch({type: 'SET_PHOTOS_TOPIC', topicID});
  }

  return {
    photoData: state.photoData,
    topicData: state.topicData,
    currentTopicID: state.currentTopicID,
    favouritePhotos: state.favouritePhotos,
    showModal: state.showModal,
    modalData: state.modalData,
    toggleFavourite,
    toggleModal,
    loadModalData,
    loadAllPhotosData,
    loadTopicData,
    loadPhotosByTopic,
    setTopicID
  }
}

export default useApplicationData;