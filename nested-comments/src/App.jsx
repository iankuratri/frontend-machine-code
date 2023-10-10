import "./App.css";
import CommentContainer from "./components/Comment/CommentContainer";
import { commentList as initialComments } from "./data/commentList";
import useComment from "./hooks/useComment";

function App() {
  const { commentList, addNewComment } = useComment(initialComments);

  return (
    <div>
      <h1>Nested Comments</h1>

      {commentList.map((comment) => (
        <CommentContainer
          key={comment.id}
          comment={comment}
          onAddComment={addNewComment}
        />
      ))}
    </div>
  );
}

export default App;
