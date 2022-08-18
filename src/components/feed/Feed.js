import { useState, useRef } from "react";
import "./Feed.scss";

import FeedOwner from "./FeedOwner";
import FeedImages from "./FeedImages";
import FeedContents from "./FeedContents";
import FeedComments from "./FeedComments";

function Feed() {
  const [commentId, setCommentId] = useState(3);
  const commentInputRef = useRef();

  const [commentList, setCommentList] = useState([
    {
      id: 0,
      content: "kevin__dev 초기 댓글1",
    },
    {
      id: 1,
      content: "kevin__dev 초기 댓글2",
    },
    {
      id: 2,
      content: "kevin__dev 초기 댓글3",
    },
  ]);

  const addNewComment = () => {
    const newContent = commentInputRef.current.value;
    if (newContent === "") return;
    setCommentId(commentId + 1);
    const newComment = {
      id: commentId,
      content: "kevin__dev " + newContent,
    };
    setCommentList([...commentList, newComment]);
    commentInputRef.current.value = "";
  };

  return (
    <div className="feed">
      <div className="head">
        <FeedOwner />
        <img className="control" src="" alt="none" />
      </div>
      <FeedImages />
      <FeedContents />
      <FeedComments commentList={commentList} />
      <div className="created-at">42분전</div>
      <div className="form">
        <input className="comment" type="text" placeholder="댓글 달기..." ref={commentInputRef} />
        <button className="send-comment" type="submit" onClick={addNewComment}>
          게시
        </button>
      </div>
    </div>
  );
}

export default Feed;
