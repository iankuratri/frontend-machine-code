import { useState } from "react";
import "./App.css";
import { commentData } from "./data/commentData";
import Comment from "./components/Comment";

function App() {
  const [commentList, setCommentList] = useState(commentData);

  const onAdd = (commentId, newComment) => {
    console.log(commentId, newComment);
  };

  return (
    <div>
      <h1>Nested Comments</h1>

      {commentList.map((comment) => (
        <Comment key={comment.id} comment={comment} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default App;
