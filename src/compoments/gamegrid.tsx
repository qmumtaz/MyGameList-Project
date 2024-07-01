import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Provider } from "../UiSlider/Provider";
import { Carousel } from "../UiSlider/Carousel";
import { LeftButton } from "../UiSlider/LeftButton";
import { RightButton } from "../UiSlider/RightButton";
import Gamecard from "./gamecard";
import GameCardComponet from "./gamecardcomponet";
import GameCardContainer from "./gamecardcontainer";
import { Genres } from "../hooks/usegenre";
import UseGames from "../hooks/usegames";


interface Props {
  selectedGenre: Genres | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { games, error, isLoading } = UseGames(selectedGenre);
  const arr = [1, 2, 3, 4, 5, 6];
 

  const handleGoBack = () => {
    setShowGameGrid(true);
  };

  if (isLoading) {
    return (
      <>
        {arr.map((x) => (
          <GameCardComponet key={x}> </GameCardComponet>
        ))}
      </>
    );
  }

  if (error == null) {
    return <Text>{error}</Text>;
  }

  return (
    <>
      <>
        <GameCardContainer>
          <Box>
            <Provider>
              <Carousel gap={10}>
                {games.map((game) => (
                  <Gamecard key={game.id} game={game} />
                ))}
              </Carousel>
              <div>
                <LeftButton
                  bgColor="red.500"
                  left={500}
                  textColor={"white.500"}
                />
                <RightButton bgColor="blue.500" left={500} />
              </div>
            </Provider>
          </Box>
        </GameCardContainer>
      </>
    </>
  );
};

export default GameGrid;
