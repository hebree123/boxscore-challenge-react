import TeamHeader from "./TeamHeader";
import TeamRow from "./TeamRow";
import GameDetails from "./GameDetails";

function Boxscore({ game }) {
  const {
    away_batter_totals,
    away_errors,
    away_period_scores,
    away_team,
    away_totals,
    home_batter_totals,
    home_errors,
    home_period_scores,
    home_team,
    home_totals,
  } = game;

  return (
    <div className="boxscore">
      <TeamHeader game={game} />
      <TeamRow
        errors={home_errors}
        game={game}
        score={home_period_scores}
        team={home_team}
        totals={home_batter_totals || home_totals}
      />
      <TeamRow
        errors={away_errors}
        game={game}
        score={away_period_scores}
        team={away_team}
        totals={away_batter_totals || away_totals}
      />
      <GameDetails game={game} />
    </div>
  );
}

export default Boxscore;
