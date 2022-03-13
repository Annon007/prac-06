import { useState, useEffect, useCallback } from 'react';
import classes from './Comments.module.css';
import { useParams } from 'react-router-dom';
import NewCommentForm from './NewCommentForm';
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from '../../hooks/use-http';
import CommentList from "../comments/CommentsList"
import { getAllComments } from '../../lib/api';


const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendReq, status, data, error } = useHttp(getAllComments);
  const params = useParams()
  const { quoteId } = params;


  useEffect(() => {
    sendReq(quoteId);
  }, [sendReq]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const addedCommentHandeler = useCallback(() => {
    sendReq(quoteId);
  }, []);
  let comment;
  if (status === 'pending') {
    comment = <div className='centered'>
      <LoadingSpinner />
    </div>;
  }

  if (status === "error") {
    return <div className='centered'> {error}</div>
  }
  if (status === "completed" && (!data || data.length === 0)) {
    comment = <div className='centered'>Give a comment!</div>
  }
  if (status === "completed" && (data && data.length > 0)) {
    comment = <CommentList comments={data} />
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {comment}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandeler} />}

    </section>
  );
};

export default Comments;
