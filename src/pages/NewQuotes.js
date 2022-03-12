import react from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
const NewQuotes = () => {
    const history = useHistory();
    const addQuoteHandeler = quoteData => {
        console.log(quoteData);

        history.push("/quote");
    };
    return <div>
        <QuoteForm onAddQuote={addQuoteHandeler} />
    </div>
};

export default NewQuotes;