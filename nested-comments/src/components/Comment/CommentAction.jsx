import React, { useCallback, useState } from "react";
import Reply from "./CommentReply";

const CommentAction = ({ onAddComment }) => {
  const [showInput, setShowInput] = useState(false);

  const handleAddComment = useCallback(
    (value) => {
      onAddComment(value);
      setShowInput(false);
    },
    [onAddComment]
  );

  return (
    <>
      {!showInput ? (
        <div>
          <button onClick={() => setShowInput(true)}>Add Reply</button>
        </div>
      ) : (
        <Reply onAddComment={handleAddComment} onShowInput={setShowInput} />
      )}
    </>
  );
};

export default React.memo(CommentAction);
