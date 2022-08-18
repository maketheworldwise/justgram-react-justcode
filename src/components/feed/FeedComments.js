import "./FeedComments.scss";

function FeedComments(props) {
  return (
    <div className="comment-list">
      <ul>
        {props.commentList.map((comment) => {
          return <li key={comment.id}>{comment.content}</li>;
        })}
      </ul>
    </div>
  );
}
export default FeedComments;
