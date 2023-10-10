import React, { useCallback } from "react";
import CommentAction from "../CommentAction/CommentAction";
import "./comment.css";

const Comment = ({ comment, onAddComment }) => {
  const addComment = useCallback(
    (value) => {
      const newComment = {
        id: Date.now(),
        text: value,
        replies: [],
      };

      onAddComment(comment.id, newComment);
    },
    [comment, onAddComment]
  );

  return (
    <>
      <div className="comment-container">
        <p>{comment.text}</p>

        <CommentAction onAddComment={addComment} />
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
