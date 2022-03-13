import react, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
const NewQuotes = () => {
    const history = useHistory();
    const { sendReq, status } = useHttp(addQuote);

    useEffect(() => {
        if (status === "completed") history.push("/quote");
    }, [status]);

    const addQuoteHandeler = quoteData => {
        sendReq(quoteData);
    };
    return <div>
        <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandeler} />
    </div>
};

export default NewQuotes;