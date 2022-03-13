import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound"
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const AllQuotes = () => {
    const { sendReq, status, data, error } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendReq();
    }, [sendReq]);

    if (status === "pending") {
        return <div className="centered">
            <LoadingSpinner />
        </div>
    };

    if (error) {
        return <div className="centered focused">{error}</div>
    };

    if (status === "completed" && (!data || data.length === 0)) {
        return <NoQuotesFound />
    };

    return <div>
        <QuoteList quotes={data} />
    </div>
};

export default AllQuotes;