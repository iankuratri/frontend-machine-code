import React, { useCallback, useState } from "react";
import "./comment.css";

const CommentReply = ({ onAddComment, onShowInput }) => {
  const [comment, setComment] = useState("");

  const handleReply = useCallback(() => {
    const value = comment.trim();

    if (!value) return;

    onAddComment(value);
    setComment("");
  }, [comment, onAddComment]);

  return (
    <>
      <input
        type="text"
        name="comment"
        value={comment}
        placeholder="Write your comment here..."
        onChange={(event) => setComment(event.target.value)}
      />

      <div className="reply-actions">
        <button onClick={handleReply}>Reply</button>
        <button onClick={() => onShowInput(false)}>Cancel</button>
      </div>
    </>
  );
};

export default React.memo(CommentReply);
