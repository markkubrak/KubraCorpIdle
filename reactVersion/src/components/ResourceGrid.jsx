import { resources } from "../data/gameData";
import ResourceCard from "./ResourceCard";

function ResourceGrid({ amounts }) {
  return (
    <section id="resources">
      <h2>Resources</h2>

      <div className="resourcegrid">
        {Object.entries(resources).map(([id, resource]) => (
          <ResourceCard key={id} label={resource.label} amount={amounts[id]} />
        ))}
      </div>
    </section>
  );
}

export default ResourceGrid;
