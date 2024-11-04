import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import useApplicationData from "hooks/useApplicationData";

const TopicList = (props) => {
  const { topics, setTopicID } = props;  
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => 
        <TopicListItem key={topic.id} topic={topic} setTopicID={setTopicID}/>
      )}
    </div>
  );
};

export default TopicList;
