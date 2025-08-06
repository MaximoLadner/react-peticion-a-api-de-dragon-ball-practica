import { Route, Switch } from "wouter";
import NavBar from "./components/nav-bar";
import CharacterDetail from "./pages/characters/character-detail";
import ListOfCharacters from "./pages/characters/list-of-characters";
import Home from "./pages/home";
import ListOfPlanets from "./pages/planets/list-of-planets";
import PlanetDetail from "./pages/planets/planet-detail";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/characters">
          <ListOfCharacters />
        </Route>
        <Route path="/characters/:id">
          <CharacterDetail />
        </Route>

        <Route path="/planets">
          <ListOfPlanets />
        </Route>

        <Route path="/planets/:id">
          <PlanetDetail />
        </Route>
      </Switch>
    </>
  );
}

export default App;
