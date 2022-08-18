import "./FeedContents.scss";

function FeedContents() {
  return (
    <div className="contents">
      <div className="menu">
        <div>
          <img className="item-image-heart" src="" alt="none" />
          <img className="item-image-speech" src="" alt="none" />
          <img className="item-image-send" src="" alt="none" />
        </div>
        <img className="item-image-bookmark" src="" alt="none" />
      </div>
      <div className="likes">
        <img className="rep-user-image" src="/images/falling-star.png" alt="none" />
        <span>star님 외 10명이 좋아합니다.</span>
      </div>
      <div className="description">kevin__dev 인스타그램 클론 코딩중...</div>
    </div>
  );
}
export default FeedContents;
