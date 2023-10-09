const addComment = (list, commentId, newComment) => {
  const findAndAdd = (commentList) => {
    for (const comment of commentList) {
      if (comment.id === commentId) {
        comment.replies.unshift(newComment);
      } else {
        findAndAdd(comment.replies);
      }
    }
  };

  findAndAdd(list);

  return JSON.parse(JSON.stringify(list));
};

export { addComment };
