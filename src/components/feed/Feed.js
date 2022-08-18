import "./Feed.scss";

import FeedOwner from "./FeedOwner";
import FeedImages from "./FeedImages";
import FeedContents from "./FeedContents";
import FeedComments from "./FeedComments";

function Feed() {
  return (
    <div className="feed">
      <div className="feed-header">
        <FeedOwner />
        <img className="feed-header__control" src="" alt="none" />
      </div>
      <FeedImages />
      <FeedContents />
      <FeedComments />
      <div className="feed-created-time">42분전</div>
      <div className="feed-comment-form">
        <input className="feed-comment-form__input" type="text" placeholder="댓글 달기..." />
        <button className="feed-comment-form__button" type="submit">
          게시
        </button>
      </div>
    </div>
  );
}
export default Feed;
