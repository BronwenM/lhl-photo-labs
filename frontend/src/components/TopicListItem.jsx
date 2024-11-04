import React, { useContext } from "react";
import "../styles/TopicListItem.scss";
import { PhotosContext } from "App";

const TopicListItem = (props) => {
  const {id, slug, title} = props.topic;
  const { setTopicID, currentTopicID } = useContext(PhotosContext);

  return (
    <div className={`topic-list__item `} onClick={() => setTopicID(id)}>
      <span className={`${currentTopicID === id ? 'active' : '' }`}>{title}</span>
    </div>
  );
};

export default TopicListItem;
