import "../Commons/Common.css";
import "./Main.css";
import React from "react";

function Main() {
  document.body.classList.add("common__body");

  const commentList = document.querySelectorAll(".feed__comment > ul");
  const commentInput = document.querySelectorAll(".feed__comment--input > input");
  const commentBtn = document.querySelectorAll(".feed__comment--input > button");

  // fetch("data/comments.json", {
  //   method: "GET",
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     data.feedCommentList.map((commentInfo) => {
  //       let newComment = commentInfo.user.username + " " + commentInfo.comment;
  //       commentList.forEach((commentListItem) => {
  //         const commentListItemChildElement = document.createElement("li");
  //         commentListItemChildElement.append(newComment);
  //         commentListItem.appendChild(commentListItemChildElement);
  //       });
  //     });
  //   });

  Array.from(commentBtn).forEach((button, idx) => {
    button.addEventListener("click", () => {
      const content = commentInput[idx].value;
      if (content === "") return;

      const childElement = document.createElement("li");
      childElement.append("kevin__dev " + content);
      commentList[idx].appendChild(childElement);

      commentInput[idx].value = "";
    });
  });

  return (
    <React.Fragment>
      <header className="header">
        <div className="common__arragement--center logo">
          <img src="/images/instagram-24x24.png" alt="none" />
          <span className="logo-separator">|</span>
          <span className="logo-text">Instagram</span>
        </div>
        <div className="common__arragement--center header__search">
          <div>
            <input type="search" placeholder="검색" />
          </div>
        </div>
        <div className="header__features">
          <div>
            <img className="icon-image" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="none" />
            <img className="icon-image" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="none" />
            <img className="icon-image" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="none" />
          </div>
        </div>
      </header>
      <main className="main">
        <div className="feed__list">
          <div className="feed">
            <div className="feed__background-color feed__header">
              <div className="common__arragement--center feed__profile">
                <img src="/images/falling-star.png" alt="none" />
                kevin__dev
              </div>
              <div className="feed__control">
                <img src="/images/control-24x24.png" alt="" />
              </div>
            </div>
            <div className="feed__image">
              <img
                src="https://images.unsplash.com/photo-1659394754737-ed2fcba5c93e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80"
                alt="no img"
              />
            </div>
            <div className="feed__background-color feed__menu">
              <div>
                <img src="/images/heart-24x24.png" alt="none" />
                <img src="/images/speech-bubble-24x24.png" alt="none" />
                <img src="/images/send-24x24.png" alt="none" />
              </div>
              <div>
                <img src="/images/bookmark-24x24.png" alt="none" />
              </div>
            </div>
            <div className="feed__background-color feed__content">
              <div className="feed__content--likes">
                <img src="/images/star.png" alt="none" />
                star님 외 10명이 좋아합니다.
              </div>
              <div>
                <span>kevin__dev 인스타그램 UI 클론 코딩중...</span>
              </div>
            </div>
            <div className="feed__background-color feed__comment">
              <ul>
                <li>kevin__dev 댓글 1</li>
                <li>kevin__dev 댓글 2</li>
                <li>kevin__dev 댓글 3</li>
              </ul>
            </div>
            <div className="feed__background-color feed__register-time">
              <div>42분전</div>
            </div>
            <div className="feed__background-color feed__comment--input">
              <input type="text" placeholder="댓글 달기..." />
              <button type="submit">게시</button>
            </div>
          </div>
          <div className="feed">
            <div className="feed__background-color feed__header">
              <div className="common__arragement--center feed__profile">
                <img src="/images/falling-star.png" alt="none" />
                kevin__dev
              </div>
              <div className="feed__control">
                <img src="/images/control-24x24.png" alt="" />
              </div>
            </div>
            <div className="feed__image">
              <img
                src="https://images.unsplash.com/photo-1659394754737-ed2fcba5c93e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80"
                alt="no img"
              />
            </div>
            <div className="feed__background-color feed__menu">
              <div>
                <img src="/images/heart-24x24.png" alt="none" />
                <img src="/images/speech-bubble-24x24.png" alt="none" />
                <img src="/images/send-24x24.png" alt="none" />
              </div>
              <div>
                <img src="/images/bookmark-24x24.png" alt="none" />
              </div>
            </div>
            <div className="feed__background-color feed__content">
              <div className="feed__content--likes">
                <img src="/images/star.png" alt="none" />
                star님 외 10명이 좋아합니다.
              </div>
              <div>
                <span>kevin__dev 인스타그램 UI 클론 코딩중...</span>
              </div>
            </div>
            <div className="feed__background-color feed__comment">
              <ul>
                <li>kevin__dev 댓글 1</li>
                <li>kevin__dev 댓글 2</li>
                <li>kevin__dev 댓글 3</li>
              </ul>
            </div>
            <div className="feed__background-color feed__register-time">
              <div>42분전</div>
            </div>
            <div className="feed__background-color feed__comment--input">
              <input type="text" placeholder="댓글 달기..." />
              <button type="submit">게시</button>
            </div>
          </div>
          <div className="feed">
            <div className="feed__background-color feed__header">
              <div className="common__arragement--center feed__profile">
                <img src="/images/falling-star.png" alt="none" />
                kevin__dev
              </div>
              <div className="feed__control">
                <img src="/images/control-24x24.png" alt="" />
              </div>
            </div>
            <div className="feed__image">
              <img
                src="https://images.unsplash.com/photo-1659394754737-ed2fcba5c93e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80"
                alt="no img"
              />
            </div>
            <div className="feed__background-color feed__menu">
              <div>
                <img src="/images/heart-24x24.png" alt="none" />
                <img src="/images/speech-bubble-24x24.png" alt="none" />
                <img src="/images/send-24x24.png" alt="none" />
              </div>
              <div>
                <img src="/images/bookmark-24x24.png" alt="none" />
              </div>
            </div>
            <div className="feed__background-color feed__content">
              <div className="feed__content--likes">
                <img src="/images/star.png" alt="none" />
                star님 외 10명이 좋아합니다.
              </div>
              <div>
                <span>kevin__dev 인스타그램 UI 클론 코딩중...</span>
              </div>
            </div>
            <div className="feed__background-color feed__comment">
              <ul>
                <li>kevin__dev 댓글 1</li>
                <li>kevin__dev 댓글 2</li>
                <li>kevin__dev 댓글 3</li>
              </ul>
            </div>
            <div className="feed__background-color feed__register-time">
              <div>42분전</div>
            </div>
            <div className="feed__background-color feed__comment--input">
              <input type="text" placeholder="댓글 달기..." />
              <button type="submit">게시</button>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Main;
