import React, { useState } from "react";
import Reply from "../Reply/Reply";
import "./comment.css";

const Comment = ({ comment, onAddComment }) => {
  console.count("commentRendered");

  const [showInput, setShowInput] = useState(false);

  const addComment = (value) => {
    const newComment = {
      id: Date.now(),
      text: value,
      replies: [],
    };

    onAddComment(comment.id, newComment);

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
          <Reply onAddComment={addComment} onShowInput={setShowInput} />
        )}
      </div>

      {comment.replies.map((comment) => (
        <div className="child-comment" key={comment.id}>
          <Comment comment={comment} onAddComment={onAddComment} />
        </div>
      ))}
    </>
  );
};

export default React.memo(Comment);
