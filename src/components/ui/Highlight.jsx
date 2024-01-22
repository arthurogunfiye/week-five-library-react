const Highlight = ({ icon, subtitle, paragraph }) => {
  return (
    <div className="highlight">
      <div className="highlight__img">{icon}</div>
      <h3 className="highlight__subtitle">{subtitle}</h3>
      <p className="highlight__para">{paragraph}</p>
    </div>
  );
};

export default Highlight;
