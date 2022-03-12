import { Fragment } from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';


const sortingQuotes = (quotes, accesding) => {
  return quotes.sort((qA, qB) => {
    if (accesding) {
      return qA.id > qB.id ? 1 : -1
    } else {
      return qB.id > qA.id ? 1 : -1
    }
  })
}
const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortingState = queryParams.get("sort") === "asc";
  const sortedQuotes = sortingQuotes(props.quotes, sortingState);

  const quotesSortingHandeler = () => {
    history.push(`${location.pathname}?sort=${sortingState ? "desc" : "asc"}`);
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={quotesSortingHandeler}>Sort by {sortingState ? "Decending" : "Assending"}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
