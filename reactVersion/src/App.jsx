import { useReducer } from "react";
import { gameReducer, initialState } from "./state/gameReducer";
import Header from "./components/Header";
import StatusPanel from "./components/StatusPanel";
import ResourceGrid from "./components/ResourceGrid";
import SkillList from "./components/SkillList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

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
