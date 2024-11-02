import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import { useContext } from 'react';
import { FavouritePhotosContext } from 'App';

const TopNavigation = (props) => {
  const {favouritePhotos} = useContext(FavouritePhotosContext);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} />
      <FavBadge isFavPhotoExist={favouritePhotos.length > 0 && true}/>
    </div>
  )
}

export default TopNavigation;