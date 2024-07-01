import {
  Image,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Spinner
} from "@chakra-ui/react";
import UseGenre, { Genres } from "../hooks/usegenre";
import GenreGames from "./genregame";
import { useState } from "react";

//TODO : Fix this 

interface Props{
  onSelectGenre:(genre : number) => void;
}

const GenreList = ({onSelectGenre} : Props) => {
    const { genres, isLoading, error } = UseGenre();
    const [selectgenreId , setSelectedGenreId] = useState("");
  
  

  const handleGenreClick = (genreId : number) => {
    setSelectedGenreId(genreId);
    onSelectGenre(genreId);
  };

  if (isLoading == true) {
    return <Spinner />
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <Menu >
       
       <MenuButton as={Button} variant={"link"}>Choose Genre</MenuButton>
       <MenuList p={1} paddingLeft={1} >
     
         {genres.map((genre) => (
           
           <MenuItem key={genre.id} onClick={() => handleGenreClick(genre.id)}>
 
             <Image boxSize="30px" src={genre.imageBackground} p={1 } /><span >{genre.name}</span>
           </MenuItem>
         ))
 
         }
          
       </MenuList>
     
     </Menu>

     {onSelectGenre != null && (
         <GenreGames genreId={selectgenreId} /> // Pass the selected genre ID as prop
       )}
    </>
    
  );
};

export default GenreList;
