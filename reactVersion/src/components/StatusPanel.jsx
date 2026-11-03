import { useState } from "react";
import { resources } from "../data/gameData";

function StatusPanel({ gold, gathering, onGenerate }) {
  // Which resource the dropdown is set to. Separate from `gathering`,
  // which is the last resource actually generated.
  const [selected, setSelected] = useState(Object.keys(resources)[0]);

  return (
    <section id="mainCharacter">
      <h2>Current Status</h2>
      <p>Gold: <span>{gold}</span></p>
      <p>Gathering: <span>{gathering ? resources[gathering].label : "Nothing"}</span></p>

      <label htmlFor="resourceSelect">Choose a resource:</label>

      <select
        id="resourceSelect"
        value={selected}
        onChange={(event) => setSelected(event.target.value)}
      >
        {Object.entries(resources).map(([id, resource]) => (
          <option key={id} value={id}>{resource.label}</option>
        ))}
      </select>

      <button type="button" onClick={() => onGenerate(selected)}>
        Generate
      </button>
    </section>
  );
}

export default StatusPanel;
