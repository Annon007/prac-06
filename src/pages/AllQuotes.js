import react from "react";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
    { id: "q1", author: "Rehan", text: "Learning React is fun!" },
    { id: "q2", author: "Nihal", text: "Learning React is great!" }
]
const AllQuotes = () => {
    return <div>
        <QuoteList quotes={DUMMY_QUOTES} />
    </div>
};

export default AllQuotes;