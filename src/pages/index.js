import { useEffect, useState } from "react";
import Boxscore from "../components/Boxscore";

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const urls = [
          "http://localhost:3001/api/game/eed38457-db28-4658-ae4f-4d4d38e9e212",
          "http://localhost:3001/api/game/6c974274-4bfc-4af8-a9c4-8b926637ba74",
        ];

        const fetchPromises = urls.map((url) => fetch(url));
        const responses = await Promise.all(fetchPromises);
        const jsonPromises = responses.map((response) => response.json());
        const gameData = await Promise.all(jsonPromises);

        setGames(gameData);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {games.map((game) => (
        <Boxscore key={`${game.league}`} game={game} />
      ))}
    </div>
  );
}

export default Games;
