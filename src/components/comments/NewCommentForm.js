import { useRef, useEffect } from 'react';
import classes from './NewCommentForm.module.css';
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";



const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendReq, status, error } = useHttp(addComment);

  useEffect(() => {
    if (status === "completed" && !error) {

      props.onAddedComment();
    }
  }, [status, error]);


  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredTxt = commentTextRef.current.value;
    sendReq({ commentData: { text: enteredTxt }, quoteId: props.quoteId });

  };


  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef} required></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
