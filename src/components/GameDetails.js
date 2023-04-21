function GameDetails({ game }) {
  return (
    <div className="boxscore__details">
      <div className={`boxscore__details__team boxscore__details__team--home`}>
        <p>
          <strong>{game.home_team.last_name}</strong>
          <br />
          <small>{game.home_team.abbreviation}</small>
        </p>
      </div>
      <div className="boxscore__details__info">
        <strong>TIME: {game.event_information.duration}</strong>
        <br />
        <strong>{game.event_information.status}</strong>
      </div>
      <div className={`boxscore__details__team boxscore__details__team--away`}>
        <p>
          <strong>{game.away_team.last_name}</strong>
          <br />
          <small>{game.away_team.abbreviation}</small>
        </p>
      </div>
    </div>
  );
}

export default GameDetails;
