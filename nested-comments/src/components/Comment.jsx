import { useState } from "react";
import "./comment.css";

const Comment = ({ comment, onAdd }) => {
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState("");

  const addComment = () => {
    const newComment = {
      id: Date.now(),
      text: input,
      replies: [],
    };

    onAdd(comment.id, newComment);

    setInput("");
    setShowInput(false);
  };

  return (
    <>
      <div className="comment-container">
        <p>{comment.text}</p>

        {!showInput ? (
          <div>
            <button onClick={() => setShowInput(true)}>Add Reply</button>
          </div>
        ) : (
          <>
            <input
              type="text"
              name="comment"
              value={input}
              placeholder="Add your comment here..."
              onChange={(event) => setInput(event.target.value)}
            />

            <div className="btn-container">
              <button onClick={addComment}>Reply</button>
              <button onClick={() => setShowInput(false)}>Cancel</button>
            </div>
          </>
        )}
      </div>

      {comment.replies.map((comment) => (
        <div className="comment-reply" key={comment.id}>
          <Comment comment={comment} onAdd={onAdd} />
        </div>
      ))}
    </>
  );
};

export default Comment;
