import "./Feed.scss";

import FeedOwner from "./FeedOwner";
import FeedImages from "./FeedImages";
import FeedContents from "./FeedContents";
import FeedComments from "./FeedComments";

function Feed() {
  return (
    <div className="feed">
      <div className="head">
        <FeedOwner />
        <img className="control" src="" alt="none" />
      </div>
      <FeedImages />
      <FeedContents />
      <FeedComments />
      <div className="created-at">42분전</div>
      <div className="form">
        <input className="comment" type="text" placeholder="댓글 달기..." />
        <button className="send-comment" type="submit">
          게시
        </button>
      </div>
    </div>
  );
}
export default Feed;
