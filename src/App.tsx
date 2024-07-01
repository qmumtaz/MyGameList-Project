import { background, Grid, GridItem, Show } from "@chakra-ui/react"
import GameGrid from "./compoments/gamegrid"
import GenreList from "./compoments/GenreList"
import Navbar from "./compoments/navbar"
import { useState } from "react"
import { Genres } from "./hooks/usegenre"
import Platformselector from "./compoments/platformselector"

import { Platform } from "./hooks/useplatforms"
import GenreGames from "./compoments/genregame"
import { Games } from "./hooks/usegenregames"


function App() {

  const [selectedGenre , SetSelectedGenre] = useState<Genres | null>(null);
  const [selectedgames , SetSelectedGames] = useState<Games | null>(null);
  const [selectedPlatform , SetSelectedPlatform] = useState<Platform | null>(null);

  return<Grid templateAreas={
    { base : '"nav " "main" ' , lg : '"nav nav" "aside main" ' }
  }> 
  <GridItem area="nav"  >   <Navbar  />  </GridItem>
          
  <Show above="lg"> 
  <GridItem area="aside"> <GenreList onSelectGenre={() => SetSelectedGenre} /> 
 
  <Platformselector selectedPlatform={ SetSelectedPlatform} />
  </GridItem> 
  </Show> 
  <GridItem area="main" >  {/* <GenreGames genreId={1}    /> */}   <GameGrid selectedGenre={selectedGenre}/>   
  </GridItem>
 
  </ Grid >
}



export default App
