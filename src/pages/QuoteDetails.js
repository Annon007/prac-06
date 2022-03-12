import react from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
    { id: "q1", author: "Rehan", text: "Learning React is fun!" },
    { id: "q2", author: "Nihal", text: "Learning React is great!" }
]
const QuoteDetails = () => {
    const params = useParams();
    const match = useRouteMatch();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    if (!quote) {
        return <p>No Quotes Found!</p>
    };
    return <div>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={match.url} exact>
            <div className="centered">
                <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
            </div>
        </Route>
        <Route path={`${match.url}/comments`}>
            <Comments />
        </Route>
    </div>
};

export default QuoteDetails;