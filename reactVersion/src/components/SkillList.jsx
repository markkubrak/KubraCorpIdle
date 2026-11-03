import { skills } from "../data/gameData";
import SkillCard from "./SkillCard";

function SkillList({ xp }) {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <p>Watch your skills improve, wow</p>

      {Object.entries(skills).map(([id, skill]) => (
        <SkillCard key={id} label={skill.label} flavor={skill.flavor} xp={xp[id]} />
      ))}
    </section>
  );
}

export default SkillList;
