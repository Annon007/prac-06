import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quote" />
        </Route>
        <Route exact path="/quote">
          <AllQuotes />
        </Route>
        <Route exact path="/new-quote">
          <NewQuotes />
        </Route>
        <Route path="/quote/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
