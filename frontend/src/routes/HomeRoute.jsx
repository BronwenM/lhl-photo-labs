import React from 'react';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {topics, photos, setTopicID} = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} setTopicID={setTopicID} />
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;
