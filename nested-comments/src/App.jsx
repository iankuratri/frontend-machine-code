import "./App.css";
import Comment from "./components/Comment/Comment";
import { commentList as initialComments } from "./data/commentList";
import useComment from "./hooks/useComment";

function App() {
  const { commentList, addNewComment } = useComment(initialComments);

  return (
    <div>
      <h1>Nested Comments</h1>

      {commentList.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onAddComment={addNewComment}
        />
      ))}
    </div>
  );
}

export default App;
