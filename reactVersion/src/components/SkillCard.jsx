import { levelFromXp } from "../engine/levels";

function SkillCard({ label, flavor, xp }) {
  return (
    <article className="skillCard">
      <h3>{label}: <span>{levelFromXp(xp)}</span></h3>
      <p>XP: <span>{xp}</span></p>
      <p>{flavor}</p>
    </article>
  );
}

export default SkillCard;
