import { useEffect, useReducer } from "react";
import { gameReducer } from "./state/gameReducer";
import { loadGame, saveGame } from "./state/saveGame";
import Header from "./components/Header";
import StatusPanel from "./components/StatusPanel";
import ResourceGrid from "./components/ResourceGrid";
import SkillList from "./components/SkillList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // loadGame runs once, on first render, to build the starting state.
  const [state, dispatch] = useReducer(gameReducer, undefined, loadGame);

  // Save whenever the state changes.
  useEffect(() => {
    saveGame(state);
  }, [state]);

  return (
    <>
      <Header />

      <main>
        <StatusPanel
          gold={state.gold}
          gathering={state.gathering}
          onGenerate={(resource) => dispatch({ type: "gather", resource })}
        />
        <ResourceGrid amounts={state.resources} />
        <SkillList xp={state.xp} />
      </main>

      <Footer />
    </>
  );
}

export default App;
