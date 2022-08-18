import "./FeedContents.scss";

function FeedContents() {
  return (
    <div className="feed-contents">
      <div className="feed-contents__menu">
        <div>
          <img className="feed-contents__heart" src="" alt="none" />
          <img className="feed-contents__speech-bubble" src="" alt="none" />
          <img className="feed-contents__send" src="" alt="none" />
        </div>
        <img className="feed-contents__bookmark" src="" alt="none" />
      </div>
      <div className="feed-contents-like">
        <img className="feed-contents__like-image" src="/images/falling-star.png" alt="none" />
        <span className="feed-contents__like-name">star님 외 10명이 좋아합니다.</span>
      </div>
      <div className="feed-contents__description">kevin__dev 인스타그램 클론 코딩중...</div>
    </div>
  );
}
export default FeedContents;
