
import { Carousel, LeftButton, Provider, RightButton } from 'chakra-ui-carousel';
import usegenregames from '../hooks/usegenregames';
import GameCardContainer from './gamecardcontainer';
import { Box } from '@chakra-ui/react';
import Gamecard2 from './gamecard2';

interface Props {
    genreId: number;
}

const GenreGames = ({ genreId }: Props) => {
  const { games, isLoading, error } = usegenregames({ genreId });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <GameCardContainer>
      <Box>
        <Provider>
          <Carousel gap={10}>
            {games.map((game) => (
              <Gamecard2 key={game.id} games={game} genreId={genreId} />
            ))}
          </Carousel>
          <div>
            <LeftButton bgColor="red.500" left={500} textColor={"white.500"} />
            <RightButton bgColor="blue.500" left={500} />
          </div>
        </Provider>
      </Box>
    </GameCardContainer>
  );
};


export default GenreGames;
