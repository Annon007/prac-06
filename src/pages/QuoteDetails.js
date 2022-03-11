import react from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
const QuoteDetails = () => {
    const params = useParams();
    return <div>
        <h1> Quote Details</h1>
        <p>{params.quoteId}</p>
        <Route path={`/quote/${params.quoteId}/comments`}>
            <Comments />
        </Route>
    </div>
};

export default QuoteDetails;