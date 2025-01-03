import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import { useContext } from 'react';
import { PhotosContext } from 'App';

const TopNavigation = (props) => {
  const {favouritePhotos, setTopicID} = useContext(PhotosContext);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => setTopicID(null)}>PhotoLabs</span>
      <TopicList topics={props.topics} setTopicID={setTopicID} />
      <FavBadge isFavPhotoExist={favouritePhotos.length > 0 && true} />
    </div>
  )
}

export default TopNavigation;