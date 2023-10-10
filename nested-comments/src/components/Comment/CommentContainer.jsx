import React, { useCallback } from "react";
import CommentAction from "./CommentAction";
import "./comment.css";

const CommentContainer = ({ comment, onAddComment }) => {
  const { id, text, replies = [] } = comment;

  const addComment = useCallback(
    (value) => {
      const newComment = {
        id: Date.now(),
        text: value,
        replies: [],
      };

      onAddComment(id, newComment);
    },
    [id, onAddComment]
  );

  return (
    <>
      <div className="comment-container">
        <p>{text}</p>

        <CommentAction onAddComment={addComment} />
      </div>

      {replies.map((comment) => (
        <div className="child-comment" key={id}>
          <CommentContainer comment={comment} onAddComment={onAddComment} />
        </div>
      ))}
    </>
  );
};

export default React.memo(CommentContainer);
