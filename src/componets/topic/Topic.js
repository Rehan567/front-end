import React from "react";
import "./Topic.scss";
import { useNavigate } from "react-router-dom";
const Topic = ({ id, title, keywords, topics, setTopics }) => {
  const navigate = useNavigate();
  const handelDelete = (id) => {
    let modifyedTopics = topics.filter((topic) => {
      return topic.id !== id;
    });
    setTopics(modifyedTopics);
  };
  const handelOnClick = (id) => {
    navigate(`/write/${id}`);
  };

  return (
    <div className="Topic">
      <div className="left-side">
        <div className="top">
          <p>{title}</p>
        </div>
        <div className="down">
          {keywords.map((keyword, i) => {
            let a;
            if (i % 3 === 0) {
              a = "a";
            } else if (i % 3 === 1) {
              a = "b";
            } else if (i % 3 === 2) {
              a = "c";
            }
            return (
              <h4 className={a} key={i}>
                {keyword}
              </h4>
            );
          })}
        </div>
      </div>
      <div className="right-side">
        <button onClick={() => handelOnClick(id)}>Write {">"}</button>
        {/* <button onClick={() => handelDelete(id)}>Delete {"x"}</button> */}
      </div>
    </div>
  );
};

export default Topic;
