import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/allMeetups";
import FavoritesPage from "./pages/favorites";
import NewMeetupPage from "./pages/newMeetup";
import MainNavigation from "./components/layout/mainNavigation";

function App() {
  return (
    <main>
      <MainNavigation />
      <section className="p-4 max-w-2xl mx-auto">
        <Switch>
          <Route path="/" exact={true}>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </section>
    </main>
  );
}

export default App;
