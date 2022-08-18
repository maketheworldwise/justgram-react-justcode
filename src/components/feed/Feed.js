import { useState, useRef } from "react";
import "./Feed.scss";

import FeedOwner from "./FeedOwner";
import FeedImages from "./FeedImages";
import FeedContents from "./FeedContents";
import FeedComments from "./FeedComments";

function Feed() {
  const [commentId, setCommentId] = useState(1);
  // const [comment, setComment] = useState({});
  const commentRef = useRef();

  const [commentList, setCommentList] = useState([
    {
      id: 0,
      content: "kevin__dev 초기 댓글",
    },
  ]);

  const addNewComment = () => {
    setCommentId(commentId + 1);
    const newComment = {
      id: commentId,
      content: "kevin__dev " + commentRef.current.value,
    };
    setCommentList([...commentList, newComment]);
    commentRef.current.value = "";
  };

  return (
    <div className="feed">
      <div className="head">
        <FeedOwner />
        <img className="control" src="" alt="none" />
      </div>
      <FeedImages />
      <FeedContents />
      <FeedComments />
      <ul style={{ padding: "10px" }}>
        {commentList.map((comment) => {
          return <li key={comment.id}>{comment.content}</li>;
        })}
      </ul>
      <div className="created-at">42분전</div>
      <div className="form">
        <input
          className="comment"
          type="text"
          placeholder="댓글 달기..."
          ref={commentRef}
          // onChange={(e) => {
          //   setComment(e.target.value);
          // }}
        />
        <button className="send-comment" type="submit" onClick={addNewComment}>
          게시
        </button>
      </div>
    </div>
  );
}

export default Feed;
