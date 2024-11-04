import React from "react";
import "../styles/TopicListItem.scss";
import useApplicationData from "hooks/useApplicationData";

const TopicListItem = (props) => {
  const {id, slug, title} = props.topic;
  const { setTopicID } = props;

  return (
    <div className="topic-list__item" onClick={() => setTopicID(id)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
