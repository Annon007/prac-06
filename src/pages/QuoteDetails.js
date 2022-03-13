import { useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";


const QuoteDetails = () => {
    const { sendReq, data, status, error } = useHttp(getSingleQuote);

    const params = useParams();
    const match = useRouteMatch()

    const { quoteId } = params;
    useEffect(() => {
        sendReq(quoteId)
    }, [sendReq, quoteId])

    if (status === "pending") {
        return <div className="centered">
            <LoadingSpinner />
        </div>
    };
    if (error) {
        return <div className="centered focused">{error}</div>
    };



    return <div>
        <HighlightedQuote text={data?.text} author={data?.author} />
        <Route path={match.path} exact>
            <div className="centered">
                <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
            </div>
        </Route>
        <Route path={`${match.path}/comments`}>
            <Comments />
        </Route>
    </div>
};

export default QuoteDetails;