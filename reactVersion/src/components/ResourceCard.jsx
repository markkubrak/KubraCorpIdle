function ResourceCard({ label, amount }) {
  return (
    <article className="resourceCard">
      <h3>{label}</h3>
      <p>Amount: <span>{amount}</span></p>
    </article>
  );
}

export default ResourceCard;
