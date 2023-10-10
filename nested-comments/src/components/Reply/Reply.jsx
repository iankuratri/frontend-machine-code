import { useState } from "react";
import "./reply.css";

const Reply = ({ onAddComment, onShowInput }) => {
  const [comment, setComment] = useState("");

  const handleReply = () => {
    const value = comment.trim();

    if (!value) return;

    onAddComment(value);
    setComment("");
  };

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

export default Reply;
