import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";

function Main() {
  return (
    <>
      <Header />
      <div className="common-container">
        <main className="feeds">
          <Feed />
          <Feed />
          <Feed />
        </main>
      </div>
    </>
  );
}

export default Main;
