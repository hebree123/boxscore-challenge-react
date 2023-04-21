import { useId } from "react";

function TeamRow({ game, team, score, totals, errors }) {
  return (
    <div
      className={`boxscore__team ${
        team.full_name ? "boxscore__team--home" : "boxscore__team--away"
      }`}
    >
      <h4>{team.abbreviation}</h4>
      <div className="boxscore__team__units">
        {score.map((unit, index) => {
          const key = useId();
          return <span key={key}>{unit}</span>;
        })}
      </div>
      <div className="boxscore__team__results">
        <span className={game.league === "NBA" ? "right" : ""}>
          {totals.runs || totals.points}
        </span>
        {game.league !== "NBA" && (
          <>
            <span>{totals.hits}</span>
            <span>{errors}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default TeamRow;
