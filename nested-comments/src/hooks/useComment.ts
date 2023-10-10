import { useCallback, useState } from "react";

const useComment = (initialComments = []) => {
  const [commentList, setCommentList] = useState(initialComments);

  const addNewComment = useCallback(
    (commentId, newComment) => {
      const findParentCommentAndReply = (commentList) => {
        for (const comment of commentList) {
          if (comment.id === commentId) {
            comment.replies.unshift(newComment);
          } else {
            findParentCommentAndReply(comment.replies);
          }
        }
      };

      // deep copy of list
      const commentListDeepCopy = JSON.parse(JSON.stringify(commentList));

      findParentCommentAndReply(commentListDeepCopy);

      setCommentList(commentListDeepCopy);
    },
    [commentList]
  );

  // const deleteComment = useCallback(() => {}, [commentList]);

  return { commentList, addNewComment };
};

export default useComment;
