import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";

function Main() {
  return (
    <>
      <Header />
      <div className="base">
        <main className="feed-list">
          <Feed />
          <Feed />
          <Feed />
        </main>
      </div>
    </>
  );
}

export default Main;
