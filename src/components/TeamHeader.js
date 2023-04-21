function TeamHeader({ game }) {
  return (
    <div className="boxscore__team boxscore__team--header">
      <div className="boxscore__team__units">
        {/* Render unit numbers */}
        {Array.from({ length: game.league === "NBA" ? 4 : 9 }, (_, i) => (
          <span key={i + 1}>{i + 1}</span>
        ))}
      </div>
      <div className="boxscore__team__results">
        {game.league === "NBA" ? (
          <span className="right">T</span>
        ) : (
          <>
            <span>R</span>
            <span>H</span>
            <span>E</span>
          </>
        )}
      </div>
    </div>
  );
}

export default TeamHeader;
